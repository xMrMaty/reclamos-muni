const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'reclamos_muni',
  password: process.env.DB_PASSWORD || 'admin123',
  port: process.env.DB_PORT || 5432,
});

router.post('/login', async (req, res) => {
  const { rut, contrasena } = req.body; // Cambiado a rut para que calce con tu formulario
  try {
    //Buscar usuario por RUT en la base de datos
    const resultado = await pool.query('SELECT * FROM usuarios WHERE rut = $1', [rut]);
    
    if (resultado.rows.length === 0) {
      return res.status(401).json({ error: 'El RUT ingresado no está registrado.' });
    }

    const usuario = resultado.rows[0];

    //Validar la contraseña usando bcrypt con el password_hash de la BD
    const passwordCorrecto = await bcrypt.compare(contrasena, usuario.password_hash);
    
    if (!passwordCorrecto) {
      return res.status(401).json({ error: 'Contraseña incorrecta.' });
    }

    //Generar el token de sesión JWT real
    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '24h' }
    );

    res.json({
      ok: true,
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        rut: usuario.rut,
        rol: usuario.rol
      }
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error interno en el proceso de autenticación.' });
  }
});

module.exports = router;