import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return(
        <Container>
            <h1 style={{marginTop: '1rem'}}>Welcome</h1>
            <p>
                This app is used to test the NBN services at any potential address you may wish to buy/rent in the foreseeable future.
                There are also some handy tips on what to ask to prevent connection delays. 
            </p>
            <p>
                We use an NBN API to gather data about the property that you are inspecting, advise what you should be looking for and some questions to ask the realtor/landlord. By asking these questions you can discover if you can connect your service as soon as you move in OR if you need to wait for a technician.            </p>
            <p>
                Please note we are not affiliated with the NBN, TIO or a Retail provider in any capacity. You can find more information about the NBN <Link to='/nbn'>here</Link> or about the impact of service delays by the TIO <Link to='/tio'>here</Link>.
            </p>
            <p>
                Any addresses you search for will be saved automatically.
            </p>
            <p>
                To begin searching, please <Link to='/login'>log in</Link>  or <Link to='/signup'>sign up.</Link>
            </p>
        </Container>
    )
}

export default Welcome