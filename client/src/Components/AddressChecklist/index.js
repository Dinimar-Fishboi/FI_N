import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'

const AddressChecklist = () => {

    const styles = {
        marginTop: {
            marginTop: '1rem',
        },
    }

    return (
        <>
            <Container>
                <h2 style={styles.marginTop}>
                    Checklist for property
                </h2>
                <lable>
                    AAAAA
                    <input type="checkbox"/>

                </lable>
            </Container>
        </>
    )
}

export default AddressChecklist