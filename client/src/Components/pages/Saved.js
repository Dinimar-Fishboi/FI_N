import React from 'react';
import { useQuery } from '@apollo/client';
import AddressList from '../AddressList/index'
import { QUERY_ME } from '../../utils/queries';
import Welcome from './Welcome';


import Auth from '../../utils/auth';

const Saved = () => {

        const { loading, data } =  useQuery(QUERY_ME, {
        });
  
            const user = data?.me 
            const addressList = user?.addresses || []

        if (loading) {
            return <div>Loading...</div>;
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