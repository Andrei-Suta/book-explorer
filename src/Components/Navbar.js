import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Nav } from 'reactstrap';
import { Book } from 'react-bootstrap-icons';
import { BookFill } from 'react-bootstrap-icons';
import { House } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import { PersonCircle} from 'react-bootstrap-icons';
import { PencilSquare} from 'react-bootstrap-icons';
import { Button } from 'bootstrap';


export class Navbar extends Component {
  render() {
    return (
      <div>
        <div style={{width: "100%", backgroundColor: "peachpuff", color: "white", height: 35, fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif", textAlign:"center", justifyContent:"center", fontStyle: "italic", fontSize: 20}}>
          Books = 
          <HeartFill color="white" size={20} style={{backgroundColor: "peachpuff", marginLeft:5, marginRight:5}}/>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#89CFF0"}}>
          <a className="navbar-brand" style={{backgroundColor: "#89CFF0", color: "white"}}>Book Explorer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: "#89CFF0", color: "white"}}>
            <ul className="navbar-nav mr-auto" style={{backgroundColor: "#89CFF0", color: "white"}}>
              <li className="nav-item active" style={{backgroundColor: "#89CFF0", color: "white"}}>
                <a className="nav-link" href="/" style={{backgroundColor: "#89CFF0", color: "white"}}><House color="white" size={20} style={{backgroundColor: "#89CFF0", color: "white"}} />   Home</a>
              </li>
              <li className="nav-item" style={{backgroundColor: "#89CFF0", color: "white" }}>
                <a className="nav-link" href="/login" style={{backgroundColor: "#89CFF0", color: "white"}}><PersonCircle color="white" size={20} style={{backgroundColor: "#89CFF0"}}/>   Login</a>
              </li>
              <li className="nav-item" style={{backgroundColor: "#89CFF0", color: "white"}}>
                <a className="nav-link" href="/register" style={{backgroundColor: "#89CFF0", color: "white"}}><PencilSquare color="white" size={20} style={{backgroundColor: "#89CFF0", color: "white"}}/>   Register</a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto" >
              <li className="nav-item" style={{backgroundColor: "#89CFF0", color: "white"}}>
                <a className="nav-link" href="/" style={{backgroundColor: "#89CFF0", color: "white"}}> <Book color="white" size={20} style={{backgroundColor: "#89CFF0", color: "white"}}/>   My Book List</a>
              </li>
          </ul>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{backgroundColor: "#89CFF0"}}>
                <button type="button" className="btn btn-light logout" style={{backgroundColor: "white", color: "#89CFF0"}}>Logout</button>
              </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar