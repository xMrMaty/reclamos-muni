const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const { enviarNotificacionEstado } = require('../utils/mailer');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'reclamos_muni',
  password: process.env.DB_PASSWORD || 'admin123',
  port: process.env.DB_PORT || 5432,
});

// 1. Obtener todos los reclamos con el nombre de su categoría (CORREGIDO: fecha_ingreso)
router.get('/', async (req, res) => {
  try {
    const consulta = `
      SELECT r.*, c.nombre AS categoria_nombre 
      FROM reclamos r
      LEFT JOIN categorias c ON r.categoria_id = c.id
      ORDER BY r.fecha_ingreso DESC
    `;
    const resultado = await pool.query(consulta);
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener reclamos:', error);
    res.status(500).json({ error: 'Error al cargar los reclamos.' });
  }
});

// 2. Insertar un nuevo reclamo (CORREGIDO: RETURNING *)
router.post('/', async (req, res) => {
  const { numero_folio, titulo, descripcion, direccion, categoria_id, usuario_id } = req.body;
  try {
    const consulta = `
    INSERT INTO reclamos (numero_folio, titulo, descripcion, direccion, categoria_id, usuario_id) 
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
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

// 3. Actualizar el estado de un reclamo y ENVIAR NOTIFICACIÓN (Puntos EF 1 y EF 5)
router.put('/:id/estado', async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  try {
    const consulta = `
      UPDATE reclamos 
      SET estado = $1, fecha_actualizacion = CURRENT_TIMESTAMP 
      WHERE id = $2 
      RETURNING *;
    `;
    const resultado = await pool.query(consulta, [estado, id]);
    
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: 'Reclamo no encontrado.' });
    }

    const reclamoActualizado = resultado.rows[0];

    // Buscar el correo del ciudadano dueño del reclamo
    const usuarioQuery = await pool.query('SELECT correo FROM usuarios WHERE id = $1', [reclamoActualizado.usuario_id]);
    
    if (usuarioQuery.rows.length > 0) {
      const correoUsuario = usuarioQuery.rows[0].correo;
      // Disparar el correo de forma asíncrona
      enviarNotificacionEstado(correoUsuario, reclamoActualizado.numero_folio, estado);
    }
    
    res.json({ ok: true, reclamo: reclamoActualizado });
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ error: 'Error al actualizar reclamo.' });
  }
});

// 4. NUEVO: Eliminar un reclamo (Delete)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await pool.query('DELETE FROM reclamos WHERE id = $1 RETURNING *', [id]);
    
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: 'Reclamo no encontrado.' });
    }
    
    res.json({ ok: true, mensaje: 'Reclamo eliminado correctamente.' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).json({ error: 'Error al eliminar el reclamo.' });
  }
});

module.exports = router;