import React from 'react';
import { useQuery } from '@apollo/client';
import AddressList from '../AddressList/index'
import { QUERY_ME } from '../../utils/queries';
import Welcome from './Welcome';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import Auth from '../../utils/auth';

const Saved = () => {

        const { loading, data } =  useQuery(QUERY_ME, {
        });
  
            const user = data?.me 
            const addressList = user?.addresses || []

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
                            <br/>
                            <Alert variant={'warning'}>
                                <p>
                                    Please note that we use a Third Party API to retrieve data for your recent input.
                                    This means that you may need to refresh this page to see your latest search results.
                                </p>
                            </Alert>
                        </Container>
                        <AddressList
                            addresses={addressList}
                        />
                    </>
                ):(
                    <>
                        <Welcome/>
                    </>
                )}
                
            </>
        )
   

}

export default Saved