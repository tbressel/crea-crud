
////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// Style importations
import styled from 'styled-components';
import { colors } from '../colors';
import { Link } from 'react-router-dom';



////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const ContactList = () => {
    const contactId = '1';
    return (
        <>
            <ul>
                {// On affiche les blocs de contacts de la base de données
                // tant qu'il y en a. Les personne y sont stocké avec la lettre de leur nom de famille
                }             
                <li>
                <Link to={`/seecontact/${contactId}`}>
          <p>Thomas Bressel</p>
        </Link>
                </li>
                
            </ul>
        </>
    )
}

export default ContactList;