import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Button,Container,Row,Col,Form,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import axios from 'axios';

//15.5.2023
//IMPORT SCREENS
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;