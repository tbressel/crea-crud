import Navigation from "../components/Navigation";
import { useParams } from 'react-router-dom';

const ModifyContact = () => {
    const { id } = useParams<{ id: string }>();

    const links = [
        { text: 'Cancel', link: '/home' },
        { text: '', link: '' },
        { text: 'Delete', link: '' },
    
      ];
    return (       
        <>
         <Navigation links={links} />
 <p>Modify Contact {id}</p>


    </>
)
}

export default ModifyContact;