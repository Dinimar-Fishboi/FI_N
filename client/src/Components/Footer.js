import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';


const Footer = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const styles = {
        greenLink: {
            color: '#009DDC ',
            textDecoration: 'underline',
        },
        gradient: {
            background: 'linear-gradient(to right,blue, #4D9DE0)'
        }
    }

    return(
        <>
            <Container>
                    <Nav className="justify-content-center" activeKey="/home" >
                    <Navbar className="justify-content-center">

                        <Nav.Item>
                        <Nav.Link href="search">
                            <Link style={styles.greenLink} to='/search'>
                                Search
                            </Link>
                        </Nav.Link>
                        </Nav.Item>
                        {Auth.loggedIn() ? (
                            <>
                                <Nav.Link href="saved">
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
                                <Nav.Link href="login" >
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
                        <Nav.Link href="more">
                            <Link to='/more' style={styles.greenLink}>
                                About
                            </Link>
                        </Nav.Link> 
                        <Nav.Link href="github">
                            <Link to='/github' style={styles.greenLink}>
                                Project Repository
                            </Link>
                        </Nav.Link> 
                        </Navbar>
                    </Nav>
            </Container>
        </>
    )
}

export default Footer