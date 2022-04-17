import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-2.png'

const Header = () => {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand as={Link} to='/'>
                              <h3>UDreamDental</h3>
                              {/* <img style={{ width: "150px", height: '40px' }} src={logo} alt="" /> */}
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link as={Link} href="#service" to="/service">Services</Nav.Link>
                                   <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                              </Nav>
                              <Nav>
                                   <Nav.Link as={Link} to='/aboutme'>
                                        About Me
                                   </Nav.Link>
                                   <Nav.Link as={Link} to='/login'>
                                        Login
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;