////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';

// Contexts importations
import { ThemeContext } from '../contexts/useTheme';

// Style importations
import styled from "styled-components";


////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////
const DeleteButton = styled.button`
    color: ${props => props.theme.colors.rouge};
    position: absolute;
    top: 12px;
    right: 38px;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
`
const Mask = styled.div`
    background-color: #6e92ff8a;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
`
const DeleteContainer = styled.div`
    background-color: ${props => props.theme.colors.blanc2};
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: ${props => props.theme.colors.gris2} 2px 2px 2px 2px;
`
const Message = styled.div`
    margin: 20px;
    padding: 20px;
    text-align: center;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
`
const Cancel = styled.button`
    cursor: pointer;
    margin: 20px;
    border-radius: 10px;
    font-family: 'Barlow Medium';
    font-size: 1.2rem;
`
const Delete = styled.button`
    cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    font-family: 'Barlow Medium';
    font-size: 1.2rem;
    background-color: ${props => props.theme.colors.rouge};
`

////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const DeleteContact = () => {

    // Get the id from the URL
    const { id } = useParams<{ id: string }>();

    // Get the contact list from general context
    const theme = useContext(ThemeContext);

    // State to show or hide the delete notification
    const [showDeleteNotification, setShowDeleteNotification] = useState(false);

    // Function to show or hide the delete notification
    const handlerDeleteClick = () => {
        setShowDeleteNotification(!showDeleteNotification);
    }


    // Function to delete a contact
    const handlerDeleteContact = () => {
        fetch(`http://localhost:4000/deletecontact/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setShowDeleteNotification(!showDeleteNotification);
                window.location.href = '/home';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <DeleteButton theme={theme} onClick={handlerDeleteClick}>
                <p>Supprimer</p>
            </DeleteButton>
            {showDeleteNotification && (
                <Mask theme={theme}>
                    <DeleteContainer theme={theme}>
                        <Message theme={theme}>
                            <p>Etes vous sur de vouloir supprimer ce contact ?</p>
                        </Message>
                        <Buttons theme={theme}>
                            <Cancel theme={theme} onClick={handlerDeleteClick}>
                                <p >Annuler</p>
                            </Cancel>
                            <Delete theme={theme} onClick={handlerDeleteContact}>
                                <p>Supprimer</p>
                            </Delete>
                        </Buttons>
                    </DeleteContainer>
                </Mask>
            )}
        </>
    )
}

export default DeleteContact;