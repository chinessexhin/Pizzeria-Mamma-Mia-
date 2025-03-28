const jwt = require('jsonwebtoken');

const secretKey = 'mi-clave-secreta';

const payload = {
    userId: 123,
    username: 'usuarioEjemplo'
};

const options = {
    expiresIn: '1h',
};

const token = jwt.sign(payload, secretKey, options);

console.log('Token generado:', token);

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Token válido, datos decodificados:', decoded);
        return decoded;
      } catch (error) {
        console.error('Token no válido o expirado', error);
    }
};

const decodedToken = verifyToken(token);
if (decodedToken) {
    const carrito = { carrito };

await fetch("http://localhost:5000/api/checkout", {
headers: {
"Content-Type": "application/json",
Authorization: `Bearer token_jwt`,
},
body: JSON.stringify({
cart: carrito,
}),
});

})
.then(response => response.json())
.then(data => console.log('Datos recibidos:', data))
.catch(error => console.error('Error en la solicitud:', error));



