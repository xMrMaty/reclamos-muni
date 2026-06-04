const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'reclamos_muni',
  password: process.env.DB_PASSWORD || 'admin123',
  port: process.env.DB_PORT || 5432,
});

// 1. Obtener todos los reclamos con el nombre de su categoría
router.get('/', async (req, res) => {
  try {
    const consulta = `
      SELECT r.*, c.nombre AS categoria_nombre 
      FROM reclamos r
      LEFT JOIN categorias c ON r.categoria_id = c.id
      ORDER BY r.fecha_creacion DESC
    `;
    const resultado = await pool.query(consulta);
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener reclamos:', error);
    res.status(500).json({ error: 'Error al cargar los reclamos.' });
  }
});

// 2. Insertar un nuevo reclamo desde el formulario
router.post('/', async (req, res) => {
  const { numero_folio, titulo, descripcion, direccion, categoria_id, usuario_id } = req.body;
  try {
    const consulta = `
    INSERT INTO reclamos (numero_folio, titulo, descripcion, direccion, categoria_id, usuario_id) 
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const valores = [numero_folio, titulo, descripcion, direccion, categoria_id, usuario_id || null];
    const resultado = await pool.query(consulta, valores);
    
    res.status(201).json({
      ok: true,
      mensaje: 'Reclamo ingresado exitosamente a Santo Domingo Digital.',
      reclamo: resultado.rows[0]
    });
  } catch (error) {
    console.error('Error al insertar reclamo:', error);
    res.status(500).json({ error: 'Error al registrar el reclamo en la base de datos.' });
  }
});

module.exports = router;