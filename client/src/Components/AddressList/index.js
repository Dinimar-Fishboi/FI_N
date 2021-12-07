import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
    background: green;
    color: white;
    margin: 0 1em;
    padding: 0.5em 1em;
    border-color: transparent;
    border-radius: 5px;
    margin-top: 1rem;
    &:hover{
        color: yellow;
    }
`
const ReloadButton = styled(Button)`
    background: #0d6efd;
    padding: 0.2em 1em;

`

const AddressList = ({
    addresses
    }) => {

    const pageReload = async (e) => {
        e.preventDefault();
        window.location.reload()
    }

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
                                    <Button as='a' href='/search'>
                                        Search for an Address
                                    </Button>
                                </h5>
                </Container>
            </>
        )
    }

    return (
        <>
                        <Container>
                            <h1 style={styles.marginTop}>Recent searches</h1>
                            <ListGroup variant="flush" >
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
                            <br/>
                                    <Button as='a' href='/search' >
                                        Search for an Address
                                    </Button>
                                    <ReloadButton type='click' onClick={pageReload}>
                                        Reload Page
                                    </ReloadButton>
                        </Container>
                    </>
    )

}

export default AddressList