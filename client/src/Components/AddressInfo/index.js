import React from 'react'
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth'; 
import {QUERY_ADDRESS} from '../../utils/queries'
import { useParams } from 'react-router-dom';
import AddressQuestions from '../AddressQuestions/index'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'

const Button = styled.button`
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    border-color: transparent;
`
const DelBtn = styled(Button)`
    background: #BF0000;
`

const BackBtn = styled(Button)`
    background: green;
    padding: 0.55em 1em;
`

const AddressInfo = () => {

    const {addressId} = useParams()

    const { loading, data } = useQuery(QUERY_ADDRESS, {
        // pass URL parameter
        variables: { addressId: addressId },
      });

      const address = data?.address || {};

      const userInput = (address.userInput)
      const streetName = (address.streetName)
      const techType = (address.techType)
      const latitude = (address.latitude)
      const longitude = (address.longitude)

      const styles = {
        marginTop: {
            marginTop: '1rem',
        },
        bold: {
            fontWeight: 'bold',
        },
        whiteLink: {
            color: 'white',
        }
    }

    if (loading) {
        return (
            <>
            <Container>
                <Alert variant={'info'}>
                    <div>Loading...</div>
                </Alert>
            </Container>
            </>
        );
        }

    return (
        <>
        {Auth.loggedIn() ? (
            <>  
                <Container>
                    <h1 style={styles.marginTop}>Address Details</h1>
                        <p>
                            What you need to know about {userInput}:
                        </p>
                        <Alert variant={'primary'}>
                            <h5>Basic info</h5>
                            <ul>
                                <li>
                                    NBN address for property: {streetName}
                                </li>
                                <li>
                                    Technology type for property: {techType}
                                </li>
                                <li>
                                    Coordinates: {latitude}, {longitude}
                                </li>
                                <li style={styles.bold}>
                                    Compare the NBN address against what you have been provided by the Real Estate/Landlord. Our data is based on the NBN's data of your premises.
                                    If there is a major difference: seek more information regarding the exact address name.
                                </li>
                            </ul>
                        </Alert>
                    <AddressQuestions
                        userInput ={address.userInput}
                        streetName ={address.streetName}
                        techType ={address.techType}
                        />
                    <Alert variant={'danger'}>
                        <h5>IMPORTANT</h5>
                            <p>
                                Always ask if the place has been re-wired/renovated/rebuilt/sub-developed since the last
                                resident had NBN service. Then ask if the NBN had been updated directly or if YOU will be required to 
                                inform your Retail Service Provider. Please note this will incur delays.
                            </p>
                    </Alert>
                        <BackBtn as='a' href='/saved'>
                            Back to Saved List
                        </BackBtn>
                        <DelBtn>
                            Delete Address
                        </DelBtn>                      
                </Container>

            </>
        ) : (
            <>

            </>
        )}

        </>
    )
}

export default AddressInfo