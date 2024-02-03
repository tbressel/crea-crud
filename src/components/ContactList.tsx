////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Contexts importations
import { ContactListContext } from '../contexts/useContacts';
import { ThemeContext } from '../contexts/useTheme';

// Style importations
import styled from 'styled-components';


////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////
const StyledDiv = styled.div`
   display: flex;
    flex-direction: column;
    align-items: space-around;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.blanc2};
    box-shadow: ${props => props.theme.colors.blanc5} 2px 2px 2px 2px;
    margin-top: 20px;
    padding: 20px;
`
const Li = styled.li`
  color: ${props => props.theme.colors.black};
  padding: 5px;
  font-size: 1.2rem;
  font-family: 'Barlow Medium';
  list-style-type: none;
  border-bottom: solid 1px ${props => props.theme.colors.gris2};

      @media screen and (min-width: 768px) {
          &:hover {
              background-color: ${props => props.theme.colors.blanc1};      
          }
      }

span {
  color: ${props => props.theme.colors.black};
  font-size: 1rem;
  font-family: 'Barlow Regular';
  font-weight: normal;
};

`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.rouge};
`

////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const ContactList = () => {

  // Get the contact list from general context
  const contacts = useContext(ContactListContext);

  // Get the colors from general context
  const colors = useContext(ThemeContext);

  // console.log('couleurs du composant ContactList.stx ', colors);
  // console.log('contacts du composant ContactList.stx ', contacts);

  return (
    <StyledDiv theme={colors}>
      {contacts.map((contact, index) => (
        <StyledLink key={index} to={`/seecontact/${contact.id}`} theme={colors}>
          <Li theme={colors}>
            {` ${contact.lastname.toUpperCase()}  `}
            <span>{`${contact.firstname}`}</span>
          </Li>
        </StyledLink>
      ))}
    </StyledDiv>
  );
};

export default ContactList;
