import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(false);

    const apiUrl = 'http://localhost:5000/api/auth';

    const login = async (credentials) => {
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (data.token) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                await getUserProfile();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error al hacer login:', error);
            return false;
        }
    };

    const register = async (credentials) => {
        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (data.token) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                await getUserProfile();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error al registrar:', error);
            return false;
        }
    };

    const getUserProfile = async () => {
        const savedToken = localStorage.getItem('token');
        if (!savedToken) {
            console.error('No hay token disponible, por favor inicie sesión');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${savedToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.email) {
                setUser({
                    id: data.id,
                    email: data.email,
                });
            } else {
                console.error('Error al obtener perfil:', data);
            }
        } catch (error) {
            console.error('Error en la solicitud de perfil:', error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(false);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, token, login, register, logout, getUserProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
