import React, { Component } from 'react'
import '../App.css';
import 'bootstrap';
import 'react-bootstrap';
import { Carousel, CarouselCaption, CarouselControl, CarouselItem, UncontrolledCarousel } from 'reactstrap';
export class Home extends Component {
  render() {
    return (
      <div>
          <h1 style={{fontFamily: "Pacifico", color: "peachpuff", fontSize: 50, marginLeft: 20, marginTop: 20}}>
              Welcome to our universe of books!
          </h1>
          
      </div>
    )
  }
}

export default Home