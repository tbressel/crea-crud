////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

// Contexts importations
import { ContactListContext } from '../contexts/useContacts';
import { ThemeContext } from '../contexts/useTheme';

// Components importations
import Navigation from "../components/Navigation";

// Style importations
import styled from 'styled-components';

////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////
const StyledDiv = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.blanc2};
    box-shadow: ${props => props.theme.colors.blanc5} 2px 2px 2px 2px;
    margin-top: 20px;
    padding: 20px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
`
const Name = styled.h2`
    color: ${props => props.theme.colors.black};
    font-size: 2rem;
    font-family: 'Barlow Medium';
    span {
        color: ${props => props.theme.colors.black};
        font-family: 'Barlow Regular';
        font-weight: normal;
    }
`;

const PhoneContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: #E5E5E5 2px 2px 2px 2px;
  margin-top: 20px;
  padding: 20px;
  width: 90%;

  p:nth-child(1) {
    color: ${props => props.theme.colors.black};
  font-size: 1rem;
  font-family: 'Barlow Regular';
  font-weight: 200;
  margin: 0;
  padding: 5px;
  text-align: left;
  }
  p:nth-child(2) {
    color: ${props => props.theme.colors.bleu1};
    font-size: 1.3rem;
  font-family: 'Barlow Regular';
  font-weight: 200;
  margin: 0;
  padding: 5px;
  text-align: left;
  }
`
const MailContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: #E5E5E5 2px 2px 2px 2px;
  margin-top: 20px;
  padding: 20px;
  width: 90%;
  p:nth-child(1) {
    color: ${props => props.theme.colors.black};
  font-size: 1rem;
  font-family: 'Barlow Regular';
  font-weight: 200;
  margin: 0;
  padding: 5px;
  text-align: left;
  };
  p:nth-child(2) {
    color: ${props => props.theme.colors.bleu1};
    font-size: 1.3rem;
  font-family: 'Barlow Regular';
  font-weight: 200;
  margin: 0;
  padding: 5px;
  text-align: left;
  
  }
`

const Mail = styled.div`


`

const Home = styled.div`

`


const Mobile = styled.div`

`



////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const SeeContact = () => {

    // Get the contact list from general context
    const contacts = useContext(ContactListContext);

      // Get the colors from general context
  const colors = useContext(ThemeContext);

    // Get the ID from the URL with the hook useParams
    let { id } = useParams<{ id: string }>();

    // Convert the ID from string to number
    const contactId = parseInt(id as string);

    // Find the contact with the same URL id and fetched datas id.
    const selectedContact = contacts.find(contact => contact.id === contactId);

/**
 * Links to display in the navigation bar
 */
    const links = [
        { text: 'Contact List', link: '/home' },
        { text: '', link: '' },
        { text: 'Modify', link: `/modifycontact/${id}` },
    ];

    return (
        <>
            <Navigation links={links} />
            {selectedContact && (
                <StyledDiv theme={colors}>

                    <ImgContainer theme={colors}>
                        <img src="./assets/images/default.jpg" alt="" />
                    </ImgContainer>
                    <Name theme={colors}> {` ${selectedContact.lastname}  `} 
              <span>{`${selectedContact.firstname}`}</span></Name>
                    
                    <PhoneContainer theme={colors}>
                    <Mobile>
                        <p>mobile</p>
                        <p>
                        {selectedContact.mobile_phone}
                        </p> 
                        </Mobile>
                    <Home>
                        <p>home</p> 
                        <p>
                            {selectedContact.home_phone}
                            </p>
                        </Home>
                    </PhoneContainer>
                    
                    
                    <MailContainer theme={colors}>
                        <Mail>
                            <p>Email</p>
                             <p>
                                {selectedContact.email}
                                </p>
                            </Mail>
                        </MailContainer>
                </StyledDiv>
            )}
        </>
    );
};

export default SeeContact;