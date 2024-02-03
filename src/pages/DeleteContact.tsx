import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContactListContext } from '../contexts/useContacts';
import { ThemeContext } from '../contexts/useTheme';


const DeleteButton = styled.button`
color: ${props => props.theme.colors.rouge};
`

const DeleteContact = () => {
    const { id } = useParams<{ id: string }>();
const theme = useContext(ThemeContext);
const [showDeleteNotification, setShowDeleteNotification] = useState(false);



const handlerDeleteClick = () => {
    setShowDeleteNotification(!showDeleteNotification);
}

const handlerDeleteContact = () => {
    fetch(`http://localhost:4000/deletecontact/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
return(
    <>
<DeleteButton theme={theme} onClick={handlerDeleteClick}>
    <p>Delete</p>
</DeleteButton>


{showDeleteNotification && (

<div>

<div>

<p>
    Etes vous sur de vouloir supprimer ce contact ?
    </p>
</div>
<div>

<p>Cancel</p>    
</div>

<div onClick={handlerDeleteContact}>

<p>Delete</p>
</div>

    </div>
    )}
    
    </>

)
}

export default DeleteContact;