import React, { Component, useState } from 'react'
import {Form, Button, Card, FormGroup } from 'reactstrap'
import {useRef} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Person } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { FormControl, FormLabel } from 'react-bootstrap';
import { Container, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";


export function Signup() {
  

    return (
    <Card style={{backgroundColor: "white", border: "none"}}> 
                <Form style={{justifyContent: "center", backgroundColor: "white"}}>
                    <FormGroup style={{justifyContent: "center"}}>
                        <FormControl placeholder='Email' type="email"  ></FormControl>
                    </FormGroup>
                    <FormGroup style={{justifyContent: "center"}}>
                        <FormControl placeholder='Password' type="password" ></FormControl>
                    </FormGroup>
                </Form>
                <Button style={{backgroundColor: "#FF8C69", justifyContent: "center", color: "white", width: "100%"}}>Sign Up</Button>
                <br/>
                <div className="text-center account" style={{color: "#FF8C69", fontStyle: "italic"}}>
                    Alreay have an account? Sign in <a className="link" href="/login">here</a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
    </Card>    
    )
  }
export default Signup;
