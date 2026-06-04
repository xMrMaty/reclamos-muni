const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const reclamosRoutes = require('./routes/reclamos');
const categoriasRoutes = require('./routes/categorias');

const app = express();
const PORT = process.env.PORT || 3001;

// =============================================
// MIDDLEWARES GLOBALES
// =============================================

// CORS - permite peticiones desde el frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://reclamos-muni.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================================
// RUTAS
// =============================================
app.use('/api/auth', authRoutes);
app.use('/api/reclamos', reclamosRoutes);
app.use('/api/categorias', categoriasRoutes);

// Ruta de salud del servidor
app.get('/api/health', (req, res) => {
  res.status(200).json({
    estado: 'OK',
    mensaje: 'Servidor Santo Domingo Digital funcionando correctamente.',
    timestamp: new Date().toISOString()
  });
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: `Ruta ${req.method} ${req.originalUrl} no encontrada.` });
});

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error('Error no manejado:', err.stack);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

// =============================================
// INICIAR SERVIDOR
// =============================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📋 API disponible en http://localhost:${PORT}/api`);
});

module.exports = app;
