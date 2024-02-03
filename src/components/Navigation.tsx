////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

// Style importations
import styled from 'styled-components';

//Contexts importations
import { ThemeContext } from '../contexts/useTheme';

////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.blanc2};
    box-shadow: ${props => props.theme.colors.blanc5} 2px 2px 2px 2px;

p {
    color: ${props => props.theme.colors.bleu1};
    font-size: 1rem;
    font-family: 'Barlow Regular';
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    margin: 0;
    padding: 20px;
};

`

////////////////////////////////////////////////////////////
//////////////////   TYPE INTERFACES    ////////////////////
////////////////////////////////////////////////////////////
/**
 * Interface for the links to display in the navigation bar
 */
interface Link {
  text: string;
  link: string;
}

/**
 * Interface for the props of the Navigation component
 */
interface NavigationProps {
  links: Link[];
}


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
function Navigation({ links }: NavigationProps) {
  
    // Get the colors from general context
    const colors = useContext(ThemeContext);

  return (
    <MainContainer theme={colors}>
      {links.map((link, index) => (
        <NavLink key={index} to={link.link}>
          <p>{link.text}</p>
        </NavLink>
      ))}
    </MainContainer>
  );
}

export default Navigation;