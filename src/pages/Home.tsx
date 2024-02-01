////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// Style importations
import styled from 'styled-components';
import { colors } from '../colors'; 
import { useEffect, useState } from 'react';


// Components importation
import Navigation from '../components/Navigation'
import ContactList from '../components/ContactList'


////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const Home = () => {
  const links = [
    { text: '', link: '' },
    { text: '', link: '' },
    { text: 'Add Contact', link: '/addcontact' },
    // Ajoutez ou supprimez des liens ici
  ];

const [contact, setContact] = useState([]);


useEffect(() => {
  const getContactList = async () => {
      try {
          const response = await fetch(`http://localhost:4000/contactlist`);
          const data = await response.json();
          setContact(data);
          console.log(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  getContactList();
}, []);

  return (
    <>
      <Navigation links={links} />
      <ContactList />
    </>
  );
};

export default Home;