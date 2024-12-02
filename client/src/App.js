import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ToDoList from "./pages/ToDo/ToDoList";
import './App.css';

function App() {
  return(
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/to-do-list" element={<ToDoList />} />
     
      

    </Routes>
  ) 
}

export default App;
