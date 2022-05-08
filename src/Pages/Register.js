import React, { Component } from 'react'
import {Signup} from '../Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
export class Register extends Component {
  render() {
    return (
      
        <Container style={{width: "30%", backgroundColor: "#white", marginTop: 0}}>
          <img style={{width: "100%"}}src='https://thumbs.dreamstime.com/b/open-book-pencil-set-books-icon-vector-open-book-pencil-set-books-icon-vector-illustration-flat-style-white-147030770.jpg'></img>
          <p style = {{color: "#FF8C69", fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif", fontSize: 30, fontStyle: "italic"}}>“If you don’t like to read, you haven’t found the right book.” - J.K. Rowling</p>
          <Signup/>
        </Container>
      
    )
  }
}

export default Register;