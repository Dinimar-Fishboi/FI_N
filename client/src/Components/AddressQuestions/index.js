import React from 'react'
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';

const AddressQuestions = ({userInput, streetName, techType}) => {

    const styles = {
        bold: {
            fontWeight: 'bold',
        },
        underlined: {
            textDecoration: 'underlined'
        },
    }

    console.log(`
            userInput: ${userInput}
            streetName: ${streetName}
            techType: ${techType}
        `)

    if (!streetName) {
        return (
            <>
                <Container>
                    <Alert variant={'warning'}>
                        <p>
                            <span style={styles.bold}>The NBN didn't return a Formatted Address based on your input.</span>
                            Try and search again; then ask if the property has ever
                            been connected to the NBN before, if it has recently been sub-developed or if the official property name is different.
                        </p>
                    </Alert>
                </Container>
            </>
        )
    }

    if (techType === 'FTTN' || techType === 'FTTB') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, your modem will connect directly to the wall via a phone socket.
                </p>
        <h5>Specific Details</h5>
                <ul>
                    <li>
                        Only 1 socket in the premises will be connected to the NBN infrastructure. 
                        <span style={styles.bold}> Ask where the Modem was connected for the previous resident/s</span>
                    </li>
                    <li>
                        In addition, you can review installation information and more <Link to="/gen-tech">here.</Link>
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>
                </Container>
            </>
        )
    }

    if (techType === 'FTTC') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, you need to confirm there
                    is a white NBN unit in the residence. If not, one will need to be provided to you by your Retail service Provider.
                </p>
            <h5>Specific Details</h5>
                <ul>
                    <li>
                        The NBN unit for this residence is called an NCD, <Link to="/fttc">diagrams and installation guides can be seen through this link.</Link>
                    </li>
                    <li>
                        Only 1 socket in the premises will be connected to the NBN infrastructure. 
                        <span style={styles.bold}> Ask where the Modem was connected for the previous resident/s</span>
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>
                </Container>
            </>
        )
    }

    if (techType === 'HFC') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, you need to confirm there
                    is a black NBN unit in the residence. If not, one will either need to ordered by your Retail Service Provider or an NBN technician will need to 
                    install a unit directly.
                </p>
            <h5>Specific Details</h5>
                <ul>
                    <li>
                        The NBN unit for this residence can be referred to as an NBN Connection Box, HFC Arris Box, NTD, or variation depending on the Retail Service Provider. <Link to="/hfc">Diagrams and installation guides can be seen through this link.</Link>
                    </li>
                    <li>
                        The Arris box will connect to a wall plate with a coaxial screw point, as it uses a pre-existing payTV/Cable network to complete the NBN connection.
                        <span style={styles.bold}> If you don't see an NBN connection point, an NBN technician will need to attend the premises. Your RSP is responsible to organise this.</span>
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>  
                </Container>
            </>
        )
    }

    if (techType === 'FIBRE') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, you need to find the NBN Termination Device (NTD) within the home. 
                    The NTD should be embedded in the wall.
                </p>
            <h5>Specific Details</h5>
                <ul>
                    <li>
                        Confirm the NTD is in the premises - if it's missing then it's likely that the property has not been connected to the NBN before or it's a new building. <Link to="/fttp">Diagrams and more information here.</Link>
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>  
                </Container>
            </>
        )
    }

    if (techType === 'WIRELESS') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, you need to find the NBN Termination Device (NTD) within the home. 
                    The NTD should be embedded in the wall.
                </p>
            <h5>Specific Details</h5>
                <ul>
                    <li>
                        Confirm the NTD is in the premises - if it's missing then it's likely that the property has not been connected to the NBN before or it's a new building. <Link to="/fw">Diagrams and more information here.</Link>
                    </li>
                    <li>
                        This address is connected to the NBN via signal, so look for a diamond shaped satellite on the roof.
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>  
                </Container>
            </>
        )
    }

    if (techType === 'SATELLITE') {
        return (
            <>
                <Container>
                <p>
                    The technology used at this residence is {techType}, you need to find the NBN Termination Device (NTD) within the home. 
                </p>
            <h5>Specific Details</h5>
                <ul>
                    <li>
                        Please note that not all Retail Service Providers actually service this technology type - NBN advise on connection to these properties can be found <Link to="/satellite">here.</Link>
                    </li>
                    <li>
                        This address is connected to the NBN via signal, so look for a diamond shaped satellite on the roof.
                    </li>
                    <li>
                        Ask if the property has ever been connected to the NBN, as if not you could be charged <Link to="/ndc">New Development Charge</Link> by the NBN.
                    </li>
                </ul>  
                </Container>
            </>
        )
    }

    return (
        <>
            <Container>
            <p>
                Default
            </p>
            </Container>
        </>
    )
}

export default AddressQuestions