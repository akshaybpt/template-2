import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../img/logo.png';
import logo2 from '../img/logo-1.png';
import './component.css';

const Navigationbar = () => {
 
  const [header, setHeader] = useState("header")
  
  const listenScrollEvent = (event) => {
    if (window.scrollY <= 70) {
      return setHeader("header")
    } else if (window.scrollY > 70) {
      return setHeader("headeractive")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const[firstImg, newImg] =useState(logo1);
  const changeImg =(event)=>{
    if (window.scrollY < 70) {
      return newImg(logo1)
    } else if (window.scrollY > 70) {
      return newImg(logo2)
    } 
  }
  useEffect(() => {
    window.addEventListener('scroll', changeImg);
  
    return () =>
      window.removeEventListener('scroll', changeImg);
  }, []);
 
    return (
      <div>
         <section className={header} >
        <div className="container ">
            <div class="row">
                <div className="col">
        <Navbar fixed="top" expand="lg" variant='dark' >
      <Container>
        <Navbar.Brand href="#home"><img src={firstImg} alt="logo" srcset="" className="img-fluid"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav  className="nav-item">
            <Nav.Link href="#Home" className="underline-hover-effect">Home</Nav.Link>
            <Nav.Link href="#Feature" className="underline-hover-effect">Features</Nav.Link>
            <Nav.Link href="#Screenshot"className="underline-hover-effect">Screenshot</Nav.Link>
            <Nav.Link href="#Support"className="underline-hover-effect">Support</Nav.Link>
            <Nav.Link href="#Pricing"className="underline-hover-effect">Pricing</Nav.Link>
            <Nav.Link href="#Blog"className="underline-hover-effect">Blog</Nav.Link>
            <Nav.Link href="#Contact"className="underline-hover-effect">Contact</Nav.Link>
            <Nav.Link href="#link"className="underline-hover-effect"><i class="bi bi-search"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                  </div>
                </div>
            </div> 
    </section>
   </div>
      
    );
    }
    
    export default Navigationbar;