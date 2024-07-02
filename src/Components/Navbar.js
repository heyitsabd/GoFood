import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../Modal';
import Cart from '../Screens/Cart';

export default function CustomNavbar() {
  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem("authToken");
    navigate('/')
  }

  const [cartView,setCartview]= useState(false)
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="#home">GoFood</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#home">Home</Nav.Link>
            {localStorage.getItem('authToken') && <Nav.Link as={Link} to="#orders">My Orders</Nav.Link>}
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            {localStorage.getItem('authToken') ? (
              <div style={{ display: 'inline' }}>
                <Button
                  as={Link}
                  variant="outline-light"
                  className="me-2"
                  onClick={handleLogout}
                >
                  LogOut
                </Button>
                <Button
                  as={Link}
              
                  variant="outline-light"
                  onClick={()=>setCartview(true)}
                >
                  My Cart
                  <Badge pill bg='danger'>2</Badge>
                </Button>
                {
                  cartView?<Modal onClose={()=>setCartview(false)} ><Cart/></Modal>:null
                }
              </div>
            ) : (
              <>
                <Button as={Link} to="/Login" variant="outline-light" className="me-2">Login</Button>
                <Button as={Link} to="/SignUp" variant="outline-light">Signup</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
