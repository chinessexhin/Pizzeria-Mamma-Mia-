import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(false);

    const login = (credentials) => {
        if (credentials.email === "admin@aidem.com" && credentials.password === "123456") {
            setUser({
                id: 1,
                name: "aidem",
                email: credentials.email,
                role: "admin",
            });
            setToken(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
