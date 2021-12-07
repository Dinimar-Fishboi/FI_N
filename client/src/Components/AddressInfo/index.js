import React from 'react'
import Container from 'react-bootstrap/Container';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth'; 
import {QUERY_ADDRESS} from '../../utils/queries'
import {REMOVE_ADDRESS} from '../../utils/mutations'
import { useParams } from 'react-router-dom';
import AddressQuestions from '../AddressQuestions/index'
import Checklist from './Checklist'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'
import Welcome from '../pages/Welcome';
import Basic from './Basic';

const Button = styled.button`
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    border-color: transparent;
        &:hover{
            color: yellow;
        }
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

    const [ removeAddress, {error}] = useMutation(REMOVE_ADDRESS, {
        variables: {addressId: addressId}
    })

    const delAddress = async (e) => {
        e.preventDefault();
        console.log("Attempting to delete address")
        try {
            await removeAddress({
                variables: {...addressId},
            })
        
        console.log("address has been deleted")

        } catch (e) {
            console.error(e);
        }  
    }

    if (loading) {
        return (
            <>
            <Container>
                <br/>
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
                    <Basic
                    userInput ={address.userInput}
                    streetName ={address.streetName}
                    techType ={address.techType}
                    latitude = {address.latitude}
                    longitude = {address.longitude}
                    />
                    <AddressQuestions
                        userInput ={address.userInput}
                        streetName ={address.streetName}
                        techType ={address.techType}
                    />
                        <BackBtn as='a' href='/saved'>
                            Back to Saved List
                        </BackBtn>
                        <DelBtn onClick={delAddress}>
                            Delete Address
                        </DelBtn>
                </Container>
                <Checklist 
                    userInput ={address.userInput}
                    streetName ={address.streetName}
                    techType ={address.techType}
                />                      
            </>
        ) : (
            <>
                <Welcome/>
            </>
        )}
        </>
    )
}

export default AddressInfo