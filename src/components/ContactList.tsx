////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { useContext, useState } from 'react';
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
    /* align-items: space-around; */
    width: 100%;
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

const Letter = styled.h2`
  color: ${props => props.theme.colors.noir};
  font-size: 1.5rem;
  font-family: 'Barlow Medium';
  margin: 20px 0 10px 0;
  padding: 5px;
  background-color: ${props => props.theme.colors.blanc3};
`
const Zoom = styled.div`
    display: none;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.blanc2};
    box-shadow: ${props => props.theme.colors.blanc5} 2px 2px 2px 2px;
    margin-top: 20px;
    padding: 20px;

      @media screen and (min-width: 768px) {
          position: fixed;
          top: 10px;
          right: 20px;
          display: flex;
          flex-direction: row;
      }
`
const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }

`



////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const ContactList = () => {

  // Get the contact list from general context
  // Get the colors from general context
  const contacts = useContext(ContactListContext);
  const colors = useContext(ThemeContext);


  // console.log('couleurs du composant ContactList.stx ', colors);
  // console.log('contacts du composant ContactList.stx ', contacts);


  // Group contacts by the first letter of the lastname
  const groupedContacts: { [key: string]: any[] } = {};

  contacts.forEach(contact => {
    const firstLetter = contact.lastname.charAt(0).toUpperCase();

    if (!groupedContacts[firstLetter]) {
      groupedContacts[firstLetter] = [];
    }

    groupedContacts[firstLetter].push(contact);
  });





  
  // Set the hovered contact to display the avatar
  // Handle the mouse enter and leave events
  // Handle the mouse enter and leave events
  const [hoveredContact, setHoveredContact] = useState<any | null>(null);

  const handleMouseEnter = (contact: any) => {
    setHoveredContact(contact);
  };

  const handleMouseLeave = () => {
    setHoveredContact(null);
  };






  return (
    <>
      <WindowContainer>

        <StyledDiv theme={colors}>
          {Object.entries(groupedContacts).map(([letter, contacts]) => (
            <div key={letter}>
              <Letter theme={colors}>{letter}</Letter>

              {contacts.map((contact, index) => (

                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(contact)}
                  onMouseLeave={handleMouseLeave}>

                  <StyledLink
                    key={index}
                    to={`/seecontact/${contact.id}`}
                    theme={colors}>


                    <Li theme={colors}>
                      {` ${contact.lastname.toUpperCase()}  `}
                      <span>{`${contact.firstname}`}</span>
                    </Li>
                  </StyledLink>
                </div>
              ))}
            </div>
          ))}

        </StyledDiv>
        {hoveredContact && (
          <Zoom theme={colors}>
            <div>
              <img
                src={hoveredContact.avatar_file ? `../../assets/images/${hoveredContact.avatar_file}` : "../../assets/images/noimage.svg"}
                alt=""
              />
            </div>
          </Zoom>
        )}
      </WindowContainer>
    </>
  );
};

export default ContactList;
