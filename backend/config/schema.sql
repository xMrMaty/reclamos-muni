-- =============================================
-- ESQUEMA DE BASE DE DATOS - Santo Domingo Digital
-- Ejecutar este script en PostgreSQL para crear la BD
-- =============================================

-- Crear base de datos (ejecutar por separado si es necesario)
-- CREATE DATABASE reclamos_muni;

-- =============================================
-- TABLA: usuarios
-- =============================================
CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  rut VARCHAR(12) NOT NULL UNIQUE,
  correo VARCHAR(150) NOT NULL UNIQUE,
  region VARCHAR(100) NOT NULL,
  comuna VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  rol VARCHAR(20) NOT NULL DEFAULT 'ciudadano' CHECK (rol IN ('ciudadano', 'admin')),
  activo BOOLEAN DEFAULT TRUE,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- TABLA: categorias
-- =============================================
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT,
  activa BOOLEAN DEFAULT TRUE
);

-- =============================================
-- TABLA: reclamos
-- =============================================
CREATE TABLE IF NOT EXISTS reclamos (
  id SERIAL PRIMARY KEY,
  numero_folio VARCHAR(20) NOT NULL UNIQUE,
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT NOT NULL,
  direccion VARCHAR(200),
  estado VARCHAR(30) NOT NULL DEFAULT 'nuevo' CHECK (estado IN ('nuevo', 'en_revision', 'asignado', 'en_proceso', 'resuelto', 'rechazado')),
  prioridad VARCHAR(20) DEFAULT 'normal' CHECK (prioridad IN ('baja', 'normal', 'alta', 'urgente')),
  usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  categoria_id INTEGER NOT NULL REFERENCES categorias(id),
  admin_id INTEGER REFERENCES usuarios(id),
  unidad_tecnica VARCHAR(100),
  fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_resolucion TIMESTAMP,
  dias_plazo INTEGER DEFAULT 20
);

-- =============================================
-- TABLA: comentarios_reclamo
-- =============================================
CREATE TABLE IF NOT EXISTS comentarios_reclamo (
  id SERIAL PRIMARY KEY,
  reclamo_id INTEGER NOT NULL REFERENCES reclamos(id) ON DELETE CASCADE,
  usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
  comentario TEXT NOT NULL,
  es_interno BOOLEAN DEFAULT FALSE,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- ÍNDICES para mejorar rendimiento
-- =============================================
CREATE INDEX IF NOT EXISTS idx_reclamos_usuario ON reclamos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_reclamos_estado ON reclamos(estado);
CREATE INDEX IF NOT EXISTS idx_reclamos_categoria ON reclamos(categoria_id);
CREATE INDEX IF NOT EXISTS idx_comentarios_reclamo ON comentarios_reclamo(reclamo_id);

-- =============================================
-- DATOS INICIALES
-- =============================================

-- Categorías base
INSERT INTO categorias (nombre, descripcion) VALUES
  ('Alumbrado Público', 'Problemas con luminarias, postes o cableado eléctrico'),
  ('Baches y Vialidad', 'Baches, grietas o daños en calles y veredas'),
  ('Aseo y Ornato', 'Basura, áreas verdes descuidadas o plagas'),
  ('Agua y Alcantarillado', 'Filtraciones, alcantarillas tapadas o falta de agua'),
  ('Tránsito', 'Señalética, semáforos o problemas de tráfico'),
  ('Ruidos Molestos', 'Ruidos fuera del horario permitido'),
  ('Otro', 'Otros problemas no categorizados')
ON CONFLICT (nombre) DO NOTHING;

-- Usuario administrador por defecto
-- Password: Admin1234! (hasheado con bcrypt)
INSERT INTO usuarios (nombre, rut, correo, region, comuna, password_hash, rol) VALUES
  ('Administrador OIRS', '11111111-1', 'admin@santodomingo.cl', 'Región de O''Higgins', 'Santo Domingo', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LPVyc5WPVQK', 'admin')
ON CONFLICT (rut) DO NOTHING;
