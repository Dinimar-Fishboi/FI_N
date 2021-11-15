import React from 'react';
import { Link } from 'react-router-dom';
// import Search from './pages/Search'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Saved from './pages/Saved'
// import Welcome from './pages/Welcome'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'
import {Navbar, Nav, Container} from 'react-bootstrap'

import Auth from '../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const styles = {
        greenLink: {
            color: 'green',
            textDecoration: 'underline',
        }
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={styles.greenLink} href="welcome">Fixed Internet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                            <Link style={styles.greenLink} to='/search'>
                                Search
                            </Link>
                    </Nav.Link>
                    {Auth.loggedIn() ? (
                    <>
                        <Nav.Link>
                            <Link style={styles.greenLink} to='/saved'>
                                Saved
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#link" onClick={logout}>
                            <Link to="/welcome" style={styles.greenLink}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </>
                    ) : (
                    <>
                        <Nav.Link href="login">
                            <Link to='/login' style={styles.greenLink}>
                                Login
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="signup">
                            <Link to='/signup' style={styles.greenLink}>
                                Signup
                            </Link>
                        </Nav.Link> 
                    </>
                    )
                    
                }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
} 

export default Header;