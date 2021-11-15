import React from 'react'
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth'; 
import {QUERY_ADDRESS} from '../../utils/queries'
import { Link, useParams } from 'react-router-dom';
import AddressQuestions from '../AddressQuestions/index'
import Alert from 'react-bootstrap/Alert'

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
        }
    }

    if (loading) {
        return <div>Loading...</div>;
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
                                inform your Retail Service Provider.
                            </p>
                    </Alert>
                    
                    <Link to="/saved">
                            Back to Saved List
                        </Link>                      
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