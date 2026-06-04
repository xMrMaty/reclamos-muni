const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'reclamos_muni',
  password: process.env.DB_PASSWORD || 'admin123',
  port: process.env.DB_PORT || 5432,
});

async function crearAdmin() {
  try {
    const passwordPlano = 'Admin1234!';
    // Encriptamos usando la librería real
    const hashReal = await bcrypt.hash(passwordPlano, 10);
    
    // Primero borramos el usuario antiguo que tiene el hash malo
    await pool.query("DELETE FROM usuarios WHERE rut = '11111111-1'");
    
    // Insertamos el usuario con el hash perfecto generado en tu máquina
    const query = `
      INSERT INTO usuarios (nombre, rut, correo, region, comuna, password_hash, rol) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const valores = [
      'Administrador OIRS', 
      '11111111-1', 
      'admin@santodomingo.cl', 
      "Región de O'Higgins", 
      'Santo Domingo', 
      hashReal, 
      'admin'
    ];
    
    await pool.query(query, valores);
    console.log('¡Usuario Administrador creado exitosamente con un hash legítimo!');
    process.exit(0);
  } catch (error) {
    console.error('Error al crear el administrador:', error);
    process.exit(1);
  }
}

crearAdmin();