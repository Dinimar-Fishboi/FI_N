import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const AddressList = ({
    addresses
    }) => {

    const styles = {
        marginTop: {
            marginTop: '1rem',
        }
    }

    if (!addresses.length) {
        return (
            <>
                <Container>
                <h3 style={styles.marginTop}> You have no saved searches yet.</h3>
                <h5 style={styles.marginTop}>
                                    <Link to='/search'>
                                        Search for an Address
                                    </Link>
                                </h5>
                </Container>
            </>
        )
    }

    return (
        <>
                        <Container>
                            <h1 style={styles.marginTop}>Recent searches</h1>
                            <ListGroup variant="flush">
                            {addresses.map((address) => (
                                <ListGroup.Item key={address._id}>
                                              <Link to={{
                                            pathname: `/saved/${address._id}`,
                                        }}>
                                            {address.userInput}
                                        </Link>
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                            <h5 style={styles.marginTop}>
                                    <Link to='/search'>
                                        Search for an Address
                                    </Link>
                                </h5>
                        </Container>
                    </>
    )

}

export default AddressList