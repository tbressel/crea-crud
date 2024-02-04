////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import React, { useState, useContext, useEffect } from 'react';

// Components importation
import Navigation from "../components/Navigation";

// Style importations
import styled from 'styled-components';

// Contexts importations
import { ThemeContext } from '../contexts/useTheme';


////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.blanc2};
  box-shadow: ${props => props.theme.colors.blanc5} 2px 2px 2px 2px;
  margin-top: 20px;
  padding: 20px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min-content;
  font-family: 'Barlow Medium';

  input {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: ${props => props.theme.colors.blanc5} 1px 1px 1px 1px;
}
`
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

      img {
          width: 150px;
          height: 150px;
          @media screen and (min-width: 768px) {
          
        &:hover {
          border-radius: 15%;
              background-color: ${props => props.theme.colors.blanc4};      
          }
        }
      }
      label {
        text-align: center;
      }
`
////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const AddContact = () => {



  // State for the selected image
  const [selectedImage, setSelectedImage] = useState("../../assets/images/default.svg");



  // State for the redirection. Waiting for the response and then redirect to the home page only when the  state is changed
  // Redirect to the home page when the state is changed
  const [redirected, setRedirected] = useState(false);
  useEffect(() => {
    if (redirected) {
      window.location.assign('/home');
    }
  }, [redirected]);



  // Get the colors from general context
  const colors = useContext(ThemeContext);



  // Links to display in the navigation bar
  const links = [
    { text: 'Annuler', link: '/home' },
    { text: '', link: '' },
    { text: '', link: '' },

  ];

  // State for the contact form
  const [contact, setContact] = useState({
    lastname: '',
    firstname: '',
    email: '',
    mobile_phone: '',
    home_phone: ''
  });


  // Function listen to  the changes in the input fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;


    // If the input IS the file input, then we need to read the file and set the selected image
    if (name === 'avatar_file') {
      const file = event.target.files?.[0];
      if (file) {
        // Create a new FileReader to read the file content
        const reader = new FileReader();

        // When the file is read, set the selected image
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else {
      // if the input is NOT the file input, then we just set the value in the state
      setContact(prevState => ({
        ...prevState,
        [name]: value
      }));


      // Validation of the email format with a regex
      if (name === 'email') {
        // regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          console.error('Invalid format');
          return;
        }
      }
    }
  };



  // Function to fetch the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Catch input values and add the contact object to the form data
    const formData = new FormData(event.currentTarget);
    formData.append('contact', JSON.stringify(contact));


    try {
      // Fetching data from the API route
      const response = await fetch('http://localhost:4000/addcontact', {

        // sending a POST json document
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        const jsonResponse = await response.json();

        console.log('Success:', jsonResponse);

        // Change the state of the redirection
        setRedirected(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <>
      <Navigation links={links} />

      <FormContainer theme={colors}>
        <Form onSubmit={handleSubmit} theme={colors}>

          <ImgContainer theme={colors}>
            <label style={{ position: 'relative' }}>
              <p>Ajouter une photo</p>
              <input type="file" id="file" name="avatar_file" accept="image/*" onChange={handleChange} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }} />
              <span><img src={selectedImage} alt="" /></span>
            </label>
          </ImgContainer>
          <label>
            Nom:
            <input type="text" name="lastname" value={contact.lastname} onChange={handleChange} required />
          </label>
          <label>
            Prénom:
            <input type="text" name="firstname" value={contact.firstname} onChange={handleChange} required />
          </label>
          <label>
          Adresse mail:
            <input type="email" name="email" value={contact.email} onChange={handleChange} required />
          </label>
          <label>
          Téléphone Mobile:
            <input type="tel" name="mobile_phone" value={contact.mobile_phone} onChange={handleChange} pattern="[0-9]+" minLength={10} maxLength={10} required />
          </label>
          <label>
          Téléphone Fixe:
            <input type="tel" name="home_phone" value={contact.home_phone} onChange={handleChange} pattern="[0-9]+" minLength={10} maxLength={10} />
          </label>
          <button type="submit">Ajouter</button>
        </Form>
      </FormContainer>
    </>
  );
};



export default AddContact;

