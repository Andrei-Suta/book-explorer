import React, { Component, useState } from 'react'
import {Form, Button, Card, FormGroup } from 'react-bootstrap'
import {useRef} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons';
import { Container, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";


export function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
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

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" style={{backgroundColor: "peachpuff"}}>
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
