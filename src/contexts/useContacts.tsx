////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import React, { createContext, useEffect, useState, ReactNode } from 'react';


////////////////////////////////////////////////////////////
//////////////////   TYPE INTERFACES    ////////////////////
////////////////////////////////////////////////////////////
interface ContactDataType {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  mobile_phone: string;
  home_phone: string;
  avatar_file: string;
}

////////////////////////////////////////////////////////////
//////////////////   CONTEXT COMPONENT   ///////////////////
////////////////////////////////////////////////////////////

export const ContactListContext = createContext<ContactDataType[]>([]);


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const ContactListContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  // State to store the fetched contacts
  const [contacts, setContacts] = useState<ContactDataType[]>([]);

  // Function to fetch the contacts from the server
  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:4000/contactlist');
      const contactListDatas = await response.json();
      setContacts(contactListDatas);
    } 
    catch (error) {
      console.error('Error fetching datas:', error);
    }
  };

  // Fetch the contacts at the initial loading if not array would contains nothing
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactListContext.Provider value={contacts}>
      {children}
    </ContactListContext.Provider>
  );
};

export default ContactListContextProvider;
