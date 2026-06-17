const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const enviarNotificacionEstado = async (correoDestino, folio, nuevoEstado) => {
  try {
    await transporter.sendMail({
      from: `"Santo Domingo Digital" <${process.env.EMAIL_USER}>`,
      to: correoDestino,
      subject: `Actualización de tu reclamo Folio #${folio}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #2c3e50;">Actualización de Reclamo</h2>
          <p>Hola,</p>
          <p>Te informamos que el estado de tu reclamo con folio <b>${folio}</b> ha sido actualizado.</p>
          <p>Nuevo estado: <strong style="color: #e74c3c; text-transform: uppercase;">${nuevoEstado}</strong></p>
          <br>
          <p>Gracias por usar la plataforma de Santo Domingo Digital.</p>
        </div>
      `
    });
    console.log(`Correo de notificación enviado exitosamente a ${correoDestino}`);
  } catch (error) {
    console.error('Error al enviar el correo de notificación:', error);
  }
};

module.exports = { enviarNotificacionEstado };