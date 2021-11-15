import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import AddressList from '../AddressList/index'
// import { SAVE_ADDRESS, REMOVE_ADDRESS} from '../../utils/mutations'
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import Welcome from './Welcome';


import Auth from '../../utils/auth';

const Saved = () => {

        const { loading, data } =  useQuery(QUERY_ME, {
        });
  
            const user = data?.me 
            const addressList = user?.addresses || []

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