import React from 'react';
import { useQuery } from '@apollo/client';
import AddressList from '../AddressList/index'
import { QUERY_ME } from '../../utils/queries';
import Welcome from './Welcome';
import Container from 'react-bootstrap/Container';

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
                    <div>Loading...</div>
                </Container>
                </>
            );
            }

        return (
            <>
                {Auth.loggedIn() ? (
                    <>
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