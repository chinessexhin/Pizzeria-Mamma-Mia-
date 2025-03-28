import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';

const Profile = () => {
    const { user, getUserProfile } = useContext(UserContext);

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <div>
            {user ? <p>Bienvenido, {user.email}</p> : <p>No hay usuario autenticado</p>}
        </div>
    );
};

export default Profile;
