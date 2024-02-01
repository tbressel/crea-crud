////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// Style importations


// React importations
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context importation

// Types importation

// Components importation
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import SeeContact from './pages/SeeContact';
import ModifyContact from './pages/ModifyContact';
import Error from './pages/Error';

////////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////////
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const App =  () => {
  return (
    <>

            <BrowserRouter> 
              <Routes>
                <Route path="/" element={<Home />} />
              
                <Route path="/home" element={<Home />} />
                <Route path="/addcontact" element={<AddContact />} />
                <Route path="/seecontact" element={<SeeContact />} />
                <Route path="/seecontact/:id" element={<SeeContact />} />
                <Route path="/modifycontact" element={<ModifyContact />} />
                <Route path="/modifycontact/:id" element={<ModifyContact />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>

    </>
  );
}
export default App;
