import React from 'react'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Contact from './components/Contact';
import Homes from './pages/homes';
import Chat from './pages/chat';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io.connect('http://localhost:4000');

const App1 = () => {
  const [username, setUserName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <>
    <Router>
      <div className='App'>
      <Navbar/>
        <Routes>
          <Route
          path='/' 
          element={
            <Home/>
          } 
          />
          <Route 
          path='/login' 
          element={
            <Login/>
          } 
          />
           <Route 
          path='/signup' 
          element={
            <Signup/>
          } 
          />
           <Route 
          path='/contact' 
          element={
            <Contact/>
          } 
          />
        </Routes>
      </div>
    </Router>
      
        
     
       
      
     
         
            
    </>
  )
}

export default App1