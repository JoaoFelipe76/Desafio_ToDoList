const redis = require('redis');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;


const redisClient = redis.createClient({
    url: process.env.REDIS_URL, 
});
redisClient.connect(); 


redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});


async function registerUser(req, res) {
    const { firstName, lastName, username, password } = req.body;

    try {
        const duplicate = await User.findOne({ username });
        if (duplicate) {
            return res.status(400).send('Username already exists');
        }
        const user = new User({ firstName, lastName, username, password });
        await user.save();
        res.status(201).send('User created');
    } catch (err) {
        console.error(err);
        return res.status(400).send('Error creating user');
    }
}


async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        const cachedUser = await redisClient.get(`user:${username}`);
        if (cachedUser) {
            return res.send(JSON.parse(cachedUser));
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('User not found');
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid password');
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        const finalData = {
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token,
        };

        
        await redisClient.setEx(`user:${username}`, 3600, JSON.stringify(finalData));

        res.send(finalData);
    } catch (err) {
        console.error(err);
        return res.status(400).send('Error logging in');
    }
}

const AuthController = {
    registerUser,
    loginUser,
};

module.exports = AuthController;
