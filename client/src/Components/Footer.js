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
            color: 'green',
            textDecoration: 'underline',
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
                        </Navbar>
                    </Nav>
            </Container>
        </>
    )
}

export default Footer