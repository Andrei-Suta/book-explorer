import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button, Card, FormGroup } from 'reactstrap'
import {useRef} from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Person } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { FormControl, FormLabel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export function Loging() {
  const emailRef = useRef();
 const passwordRef = useRef();
  return (
    <Card style={{backgroundColor: "white", marginTop: 5, borderRadius: 1, border: "none"}}> 
                <Form style={{justifyContent: "center", backgroundColor: "white"}}>
                    <FormGroup style={{justifyContent: "center"}}>
                        <FormControl placeholder='Email' type="email" ref={emailRef} ></FormControl>
                    </FormGroup>
                    <FormGroup style={{justifyContent: "center"}}>
                        <FormControl placeholder='Password' type="password" ref={passwordRef}></FormControl>
                    </FormGroup>
                </Form>
                <Button style={{backgroundColor: "#75E6DA", justifyContent: "center", color: "white", width: "100%"}}>Sign In</Button>
                <br/>
                <div className="text-center account" style={{color: "#75E6DA", fontStyle: "italic"}}>
                    Dont't have an account yet? Sign up <a className="link" href="/register">here</a>
                </div>
    </Card>    
  )
  
}
export default Loging