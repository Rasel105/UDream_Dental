import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
     const [user] = useAuthState(auth);

     const hanldeSignOut = () => {
          signOut(auth);
     };

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
                                   <Nav.Link as={Link} to="/service">Services</Nav.Link>
                                   <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                              </Nav>
                              <Nav>
                                   <Nav.Link as={Link} to='/aboutme'>
                                        About Me
                                   </Nav.Link>
                                   <Nav.Link>
                                        {
                                             user ?
                                                  <p onClick={hanldeSignOut}>Logout</p>
                                                  :
                                                  <Link style={{ textDecoration: "none", color: "white" }} to='/login'>Login</Link>
                                        }
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;