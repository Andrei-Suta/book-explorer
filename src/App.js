import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import app from "./firebase";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Pages/Home.js';
import Register from './Pages/Register.js';
import Login from './Pages/Login.js';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import { UserAuthContextProvider } from './Context/UserAuthContext';

import User from './Pages/User';

function App() {
  return (

      <div className="App">
      <div class = 'navBar'>
       
        <Router>
            <Navbar/>
            <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/account" element={<ProtectedRoute><User/></ProtectedRoute>}/>
          </Routes>
          </UserAuthContextProvider>
        </Router>  
      </div>  
    </div>
  
    
  );
}

export default App;
