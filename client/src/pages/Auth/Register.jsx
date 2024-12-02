import React,{useState} from 'react'
import styles from './Login.module.css';
import register from '../../assets/register.png';
import {Button, Input, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../util/GetError';
import AuthServices from '../../services/authServices';

function Register() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async ()=>{
    try{
      setLoading(true);
      const data = {
        firstName,
        lastName,
        username,
        password
      }
      const response = await AuthServices.registerUser(data);
      console.log(response.data);
      setLoading(false);
      message.success("You're Registered Successfully!");
      navigate('/login');
    }catch(err){
      console.log(err);
      message.error(getErrorMessage(err));
      setLoading(false);
    }
  }
  return (
    <div>
      <div className={styles.login__card}>
          <img src={register} alt=".."/>
          <h2>Cadastro</h2>
          <div className={styles.input__inline__wrapper}>
              <Input 
              placeholder="Primeiro Nome" 
              value={firstName} 
              onChange={(e)=>setFirstName(e.target.value)} />
              <Input 
              placeholder="Sobrenome" 
              style={{marginLeft:'10px'}}
              value={lastName} 
              onChange={(e)=>setLastName(e.target.value)} />

          </div>
          <div className={styles.input__wrapper}>
              <Input 
              placeholder="Nome de Usuário" 
              value={username} 
              onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div className={styles.input__wrapper}>
              <Input.Password 
              placeholder="Senha" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className={styles.input__info}>
          Já se cadastrou? Vá para o <Link to="/login">Login</Link>
           </div> 
           <Button loading={loading} type="primary" size="large" disabled={!username || !password} onClick={handleSubmit} >Cadastre-se</Button>
      </div>
    </div>
  )
}

export default Register