const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Conexión automática usando el archivo .env
const pool = new Pool();

// Obtener todas las categorías reales de la BD
router.get('/', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM categorias ORDER BY id ASC');
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: 'Error en el servidor al cargar categorías.' });
  }
});

module.exports = router;