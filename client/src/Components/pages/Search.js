import React, {useState} from 'react'
import  Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLazyQuery } from "@apollo/client";
import Welcome from './Welcome';
import Alert from 'react-bootstrap/Alert'

import Auth from '../../utils/auth'; 

import styled from 'styled-components'
import { SEARCH_ADDRESS } from '../../utils/queries';

const Button = styled.button`
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    border-color: transparent;
    border-radius: 5px;
        &:hover{
            color: yellow;
        }
`
const SubmitBtn = styled(Button)`
    background: green;
`

const LinkBtn = styled(Button)`
    background: #0d6efd;
    padding: 0.5em 1em;
`

const Search = props => {

    const [addressString, setAddressString] = useState('')

    const [ searchAddress, { loading, data }] = useLazyQuery(SEARCH_ADDRESS, {
        // pass URL parameter
        variables:  { address: addressString},
      });

      const styles = {
          marginTop: {
              marginTop: '1rem',
          }
      }

    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('');
    const [suburb, setSuburb] = useState('');
    const [stateTerritory, setStateTerritory] = useState('');
    const [postCode, setPostCode] = useState('');

    const updateAddress = async (e) => {
        e.preventDefault();
        searchAddress()
        window.location.href ='/saved';
        return
        }

    const logAddress = async (e) => {
        e.preventDefault();
        const { target } = e;
        const inputValue = target.value;
        const inputType = target.name;
        switch (inputType) {
            case 'addressOne':
                setAddressOne(inputValue);
                break;
            case 'addressTwo':
                setAddressTwo(inputValue);
                break;
            case 'suburb':
                setSuburb(inputValue);
                break;
            case 'stateTerritory':
                setStateTerritory(inputValue);
                break;
            case 'postCode':
                setPostCode(inputValue);
                break;
        }
        console.log(`${addressOne} ${addressTwo} ${suburb} ${stateTerritory} ${postCode}`)
        setAddressString(`${addressOne} ${addressTwo} ${suburb} ${stateTerritory} ${postCode}`)
        console.log(addressString)
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
                        <h1 style={styles.marginTop}>Search Address</h1>

                            <Form onSubmit={updateAddress}>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address line 1</Form.Label>
                                    <Form.Control 
                                        value={addressOne} 
                                        name='addressOne'
                                        type='text'
                                        onChange={logAddress}
                                        placeholder="Prime address (i.e. 12 Main Street)" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address line 2</Form.Label>
                                    <Form.Control 
                                    value={addressTwo} 
                                    name='addressTwo' 
                                    onChange={logAddress}
                                    // defaultValue=''
                                    type='text'
                                    placeholder="Sub address (i.e. Unit 4)" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City/Suburb</Form.Label>
                                    <Form.Control 
                                    value={suburb} 
                                    onChange={logAddress}
                                    name='suburb' 
                                    type='text'/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State/Territory</Form.Label>
                                    <Form.Select value={stateTerritory} name='stateTerritory' onChange={logAddress}>
                                        <option>Choose...</option>
                                        <option>ACT</option>
                                        <option>NSW</option>
                                        <option>NT</option>
                                        <option>QLD</option>
                                        <option>SA</option>
                                        <option>TAS</option>
                                        <option>VIC</option>
                                        <option>WA</option>
                                    </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control
                                    value={postCode} 
                                    onChange={logAddress}
                                    name='postCode' />
                                    </Form.Group>
                                </Row>

                                <SubmitBtn type="submit">
                                    Submit
                                </SubmitBtn>
                                <LinkBtn as='a' href='/saved'>
                                    See Saved results
                                </LinkBtn>
                                </Form>
                    </Container>

                </>
                ) : (
                    <>
                        <Welcome/>
                    </>
                )}
            </>  
        )
}


export default Search
