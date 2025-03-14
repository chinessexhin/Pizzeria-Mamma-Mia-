import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const login = (credentials) => {
        if(credentials.email === "admin@aidem.com" && credentials.password === "123456"){
            setUser({
             id: 1,
             name: "aidem",
             email: credential.email,
             role: "admin",
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;