import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomLink from '../CustomLink/CustomLink';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { BoxArrowInLeft } from 'react-bootstrap-icons';

const Header = () => {
     const [user] = useAuthState(auth);

     const hanldeSignOut = () => {
          signOut(auth);
          toast("Signout Successfully!");
     };

     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand as={Link} to='/'>
                              <h3 style={{ color: "#45B8AC" }}>UDreamDental</h3>
                              {/* <img style={{ width: "150px", height: '40px' }} src={logo} alt="" /> */}
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link className="fs-5" as={CustomLink} to="/service">Services</Nav.Link>
                                   <Nav.Link className="fs-5" as={CustomLink} to="/blog">Blogs</Nav.Link>
                              </Nav>
                              <Nav className='d-flex justify-content-center align-items-center'>
                                   <Nav.Link className="fs-5" as={CustomLink} to='/aboutme'>
                                        About Me
                                   </Nav.Link>
                                   <Nav.Link>
                                        {
                                             user ?
                                                  <p className="fs-5  mb-0 text-white" onClick={hanldeSignOut}>Logout <BoxArrowRight className='mx-1' color="white" size={25} /> </p>
                                                  :
                                                  <CustomLink to='/login' className="fs-5 ">Login <BoxArrowInLeft className='mx-1' color="white" size={25} /></CustomLink >
                                        }
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                         <ToastContainer />
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;