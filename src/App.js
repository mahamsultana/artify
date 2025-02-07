import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/home' element={<Home />} />
         <Route path='/signup' element={<Signup />} />
           <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
