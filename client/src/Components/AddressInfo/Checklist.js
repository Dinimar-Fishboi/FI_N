import React from 'react'
import Container from 'react-bootstrap/Container';
import Inquire from './Inquire'

const Checklist = ({userInput, streetName, techType}) => {

    const inqArray = [
        {
            id: 1,
            inq: "Has the property ever been connected to the NBN network before?",
            warning: "You are likely going to be charged a New Development Charge. See above for details."
        },
        {
            id: 2,
            inq: "Has the property been recently subdivided?",
            warning: "Ask if the NBN connection was part of the property that you are inspecting. If not, new infrastructure will need to be installed and you could be charged the New Development Charge."
        },
        {
            id: 3,
            inq: "Have there been any recent renovations that change the internal wiring?",
            warning: "If the NBN line was removed, then the NBN will need to reinstall it. You will need to provide the contact details of the persons/company that changed the internal wiring to your Retail Provider, for them to pass on to the NBN."
        }    
    ]

    return (
        <>
            <Container>
                <h2 style={{marginTop: '1rem'}}>
                    Checklist for property
                </h2>
                <p>
                    Below are some questions you may want to ask the realtor. 
                </p>
                <Inquire 
                    userInput ={userInput}
                    streetName ={streetName}
                    techType ={techType}
                    inqArray= {inqArray}
                    /> 
            </Container>
        </>
    )
}

export default Checklist