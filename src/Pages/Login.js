import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Loging
 from '../Components/Loging'


export class Login extends Component {
  render() {
    return (

        <Container style={{width: "30%", backgroundColor: "#white", marginTop: 20}}>
          <img style={{width: "100%"}}src='https://leverageedu.com/blog/wp-content/uploads/2019/09/Importance-of-Books.jpg'></img>
          <p style = {{color: "#75E6DA", fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif", fontSize: 30, fontStyle: "italic"}}>“A room without books is like a body without a soul.” – Cicero</p>
          <Loging/>
        </Container>

    )
  }
}

export default Login