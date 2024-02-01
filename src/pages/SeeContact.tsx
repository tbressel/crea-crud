
import Navigation from "../components/Navigation";
import { useParams } from 'react-router-dom';

const SeeContact = () => {
    const { id } = useParams<{ id: string }>();
    const links = [
        { text: 'Contact List', link: '/home' },
        { text: '', link: '' },
        { text: 'Modify', link: `/modifycontact/${id}` },
    ];





    return (
        <>

            <Navigation links={links} />
            <p>See Contact  {id}</p>

        </>
    );
};

export default SeeContact;