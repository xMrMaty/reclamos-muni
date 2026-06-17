const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 
const xss = require('xss-clean');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const reclamosRoutes = require('./routes/reclamos');
const categoriasRoutes = require('./routes/categorias');

const app = express();
const PORT = process.env.PORT || 3001;

// =============================================
// MIDDLEWARES DE SEGURIDAD AVANZADA
// =============================================

// 1. Configura cabeceras HTTP seguras para mitigar vulnerabilidades web conocidas
app.use(helmet());

// 2. Limpia los datos de entrada en req.body, req.query y req.params para prevenir inyecciones Cross-Site Scripting (XSS)
app.use(xss());

// =============================================
// MIDDLEWARES GLOBALES
// =============================================

// CORS - permite peticiones controladas desde tus entornos de desarrollo y producción
const origenesPermitidos = [
  'http://localhost:5173', 
  'http://localhost:3000', 
  'https://reclamos-muni.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (origenesPermitidos.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Acceso denegado por políticas de CORS de Santo Domingo Digital'));
    }
  },
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
    mensaje: 'Servidor Santo Domingo Digital funcionando correctamente con seguridad avanzada aplicada.',
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
  console.log(`🚀 Servidor seguro corriendo en http://localhost:${PORT}`);
  console.log(`📋 API disponible en http://localhost:${PORT}/api`);
});

module.exports = app;