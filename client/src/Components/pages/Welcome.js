import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const styles = {
    marginTop: {
        marginTop: '1rem',
    }
}

const Welcome = () => {
    return(
        <Container>
            <h1 style={styles.marginTop}>Welcome</h1>
            <p>
                This app is used to test the NBN services at any potential address you may wish to buy/rent in the foreseeable future.
                There are also some handy tips on what to ask to prevent connection delays. 
            </p>
            <p>
                To begin searching, please <Link to='/login'>log in</Link>  or <Link to='/signup'>sign up.</Link>
            </p>
        </Container>
    )
}

export default Welcome