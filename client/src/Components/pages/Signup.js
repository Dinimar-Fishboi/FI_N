import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

import styled from 'styled-components'

const Button = styled.button`
    background: green;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const Signup = (props) => {

    const styles = {
        marginTop: {
            marginTop: '1rem',
        }
    }

    const [formState, setFormState] = useState(
            {
                username: '', 
                email: '',
                password: ''
            }
        );
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }

      };

    return(
        <>
        <Container>
            <h1 style={styles.marginTop}>Signup</h1>
                <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="username" placeholder="Please enter your name here" value={formState.username} onChange={handleChange} name="username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Please enter your email here" value={formState.email} onChange={handleChange} name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={formState.password} name='password' onChange={handleChange} type='password' placeholder="********" />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
                </Form>
                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                    )}
            </Container>
        </>
    )
}

export default Signup