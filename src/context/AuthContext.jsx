import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const apiUrl = "http://localhost:5000/api";

const fetchData = async (url, method, body = null, token = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
        };

        const response = await axios({
            method,
            url,
            headers,
            data: body, 
        });

        return response.data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return null;
    }
};

const login = async (email, password) => {
    const data = await fetchData(`${apiUrl}/auth/login`, 'POST', { email, password });

    if (data && data.token) {
        localStorage.setItem('token', data.token); 
        console.log('Login exitoso, token recibido:', data.token);
    } else {
        console.error('Error al autenticar:', data);
    }
};

const register = async (email, password) => {
    const data = await fetchData(`${apiUrl}/auth/register`, 'POST', { email, password });

    if (data && data.token) {
        localStorage.setItem('token', data.token);
        console.log('Registro exitoso, token recibido:', data.token);
    } else {
        console.error('Error al registrarse:', data);
    }
};

const checkout = async (carrito) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('Por favor inicie sesión');
        return;
    }

    const data = await fetchData(`${apiUrl}/checkout`, 'POST', { cart: carrito }, token);
    console.log('Datos recibidos del checkout:', data);
};

const getUserProfile = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        console.error('Por favor inicie sesión');
        return;
    }

    const data = await fetchData(`${apiUrl}/auth/me`, 'GET', null, token);
    console.log('Perfil del usuario:', data);
};


const main = async () => {
    await login('test@example.com', '123123');
    await getUserProfile();
    const carrito = [
        { productId: 1, nombre: 'Pizza Napolitana', cantidad: 1, precio: 5950 },
        { productId: 2, nombre: 'Pizza Española', cantidad: 1, precio: 6950 },
        { productId: 3, nombre: 'Pizza Pepperoni', cantidad: 1, precio: 6950 },
    ];
    await checkout(carrito);
};

main();

