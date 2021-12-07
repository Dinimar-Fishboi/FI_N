import React, {useState} from 'react'
import styled from 'styled-components'

const Li = styled.li`
    flex-direction: column;
    margin:  1em;

`
const Button = styled.button`
    color: white;
    margin: 0 1em;
    background: #BF0000;
    padding: 0.25em 1em;
    border-radius: 5px;
    border-color: transparent;
        &:hover{
            color: yellow;
        }
`

const Hush = styled.p`
    background-color: #BF0000;
    color: white;
    margin-top: 1em;
    margin: 0 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    border-color: transparent;    
`

const Inquire = ({ inqArray}) => {

    const [inputDisplay, setInputDisaply] = useState("none")
    const [msgWarning, setMsgWarning] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        const newMsg = e.target.value;
        setMsgWarning(newMsg)
        if (inputDisplay === "none") {
            setInputDisaply("block")
        }
    }

    return (
        <>  
            <ul>
                {inqArray.map((item) => (
                    <Li key={item.id}>
                        {item.inq}
                        <Button onClick={handleChange} value={item.warning}>
                            {item.button}
                        </Button>
                        
                    </Li>
                    
                ))}
            </ul>
            <Hush style={{display: inputDisplay}}>
                {msgWarning}
            </Hush>
        </>
    )

}

export default Inquire

