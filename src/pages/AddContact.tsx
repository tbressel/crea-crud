import Navigation from "../components/Navigation";
import React, { useState } from 'react';

const AddContact = () => {
    const links = [
      { text: 'Cancel', link: '/home' },
      { text: '', link: '' },
      { text: '', link: '' },

    ];
      const [contact, setContact] = useState({
        lastname: '',
        firstname: '',
        email: '',
        mobile_phone: '',
        home_phone: ''
      });
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
  
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        fetch('http://localhost:4000/addcontact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
  
            setContact({
                lastname: '',
                firstname: '',
                email: '',
                mobile_phone: '',
                home_phone: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
  
  
    return (
      <>
        <Navigation links={links} />

        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input type="text" name="lastname" value={contact.lastname} onChange={handleChange} />
          </label>
          <label>
            Prénom:
            <input type="text" name="firstname" value={contact.firstname} onChange={handleChange} />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" value={contact.email} onChange={handleChange} />
          </label>
          <label>
            Mobile:
            <input type="tel" name="mobile_phone" value={contact.mobile_phone} onChange={handleChange} />
          </label>
          <label>
            Home:
            <input type="tel" name="home_phone" value={contact.home_phone} onChange={handleChange} />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </>
    );
  };

  export default AddContact;




