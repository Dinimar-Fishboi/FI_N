import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Basic = ({userInput, streetName, techType, latitude, longitude}) => {

    return (
        <>
            <h1 style={{marginTop: '1rem'}}>Address Details</h1>
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
                        <li style={{ fontWeight: 'bold'}}>
                            Compare the NBN address against what you have been provided by the Real Estate/Landlord. Our data is based on the NBN's data of your premises.
                            If there is a major difference: seek more information regarding the exact address name.
                        </li>
                    </ul>
                </Alert>
        </>
    )
}

export default Basic