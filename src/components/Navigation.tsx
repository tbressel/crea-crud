
////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// Style importations
import styled from 'styled-components';
import { colors } from '../colors';
import { NavLink } from 'react-router-dom';

// Components importation



////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const BoxLeft = styled.div`
    
`
const BoxCenter = styled.div`
    
`
const BoxRight = styled.div`
    
`
interface Link {
    text: string;
    link: string;
  }
  
  interface NavigationProps {
    links: Link[];
  }


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
function Navigation({ links }: NavigationProps) {
    return (
      <MainContainer>
        {links.map((link, index) => (
          <NavLink key={index} to={link.link}>
            <p>{link.text}</p>
          </NavLink>
        ))}
      </MainContainer>
    );
  }
  
  export default Navigation;