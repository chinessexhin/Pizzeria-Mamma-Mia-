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
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const data = await response.json();

            if (data.token) {
                setToken(data.token);
                setUser({
                    email: data.email,
                    id: data.id,
                });
                localStorage.setItem('token', data.token);
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
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const data = await response.json();

            if (data.token) {
                setToken(data.token);
                setUser({
                    email: data.email,
                    id: data.id,
                });
                localStorage.setItem('token', data.token); 
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error al registrar:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(false);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
