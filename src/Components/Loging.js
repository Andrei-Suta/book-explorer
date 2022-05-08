import React, { Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import {Form, Button, Card, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useRef} from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Person } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { FormControl, FormLabel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useUserAuth } from '../Context/UserAuthContext';


export function  Loging() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" style={{backgroundColor: "peachpuff"}}>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </>
  );
};

export default Loging;