////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

// Contexts importations
/* Theme colors */
import { ThemeContext } from './contexts/useTheme';
import ThemeContextProvider from './contexts/useTheme';
/* To access contact datas everywhere */
import ContactListContextProvider from './contexts/useContacts';

// Components importation
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import SeeContact from './pages/SeeContact';
import ModifyContact from './pages/ModifyContact';
import Error from './pages/Error';

// Style importations*
import { styled } from 'styled-components';

////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////

const GlobalStyle = styled.div`
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    overflow-x: hidden;
    min-width: 320px;
    font-family: 'Barlow Medium';

  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @font-face {
        font-family: 'Gibson Bold';
        src: url('/assets/fonts/Gibson/GibsonBold.woff2') format('woff2');
  }

  @font-face {
        font-family: 'Gibson Medium';
        src: url('/assets/fonts/Gibson/GibsonMedium.woff2') format('woff2');
  }
  @font-face {
        font-family: 'Gibson Light';
        src: url('/assets/fonts/Gibson/GibsonLight.woff2') format('woff2');
  }

  @font-face {
        font-family: 'Barlow Medium';
        src: url('/assets/fonts/Barlow/Barlow-Medium.woff2') format('woff2');
  }
  @font-face {
        font-family: 'Barlow Regular';
        src: url('/assets/fonts/Barlow/Barlow-Regular.woff2') format('woff2');
  }
  @font-face {
        font-family: 'Barlow Bold';
        src: url('/assets/fonts/Barlow/Barlow-Bold.woff2') format('woff2');
  }

`

const EyeImg = styled.div` 
width: fit-content;
  font-size: 3.8rem;
  position: absolute;
  top: 2px;
`
  
const EyeContainer = styled.div`
display: flex;
justify-content: center;
cursor: pointer;
`

////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const App =  () => {
  return (
    
    <GlobalStyle>
    <ThemeContextProvider>

      <Content />

    </ThemeContextProvider>
      </GlobalStyle>
  );
}

const Content = () => {

  /**
   * Get the colors and the function to toggle the theme
   */
  const { colors, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <ContactListContextProvider> 


        <EyeContainer>
          <EyeImg onClick={toggleTheme}>👁️</EyeImg>
        </EyeContainer>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/seecontact/:id" element={<SeeContact />} />
            <Route path="/seecontact" element={<SeeContact />} />
            <Route path="/modifycontact/:id" element={<ModifyContact />} />
            <Route path="/modifycontact" element={<ModifyContact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </ContactListContextProvider> 
      </>
  );
}

export default App;