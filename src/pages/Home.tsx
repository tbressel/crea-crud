////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// Components importation
import Navigation from '../components/Navigation'
import ContactList from '../components/ContactList'

////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const Home = () => {

/**
 * Links to display in the navigation bar
 */
  const links = [
    { text: '', link: '' },
    { text: '', link: '' },
    { text: 'Add Contact', link: '/addcontact' },
  ];

  return (
    <>
      <Navigation links={links} />
      <ContactList />
    </>
  );
};

export default Home;

