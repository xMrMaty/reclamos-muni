import React, { useState } from 'react';
import { IonPage, IonContent, IonCard, IonInput, IonButton, IonIcon, IonText, IonItem, IonLabel, useIonToast, IonSpinner } from '@ionic/react';
import { businessOutline, idCardOutline, lockClosedOutline, eyeOffOutline, eyeOutline, logInOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  const [presentToast] = useIonToast();
  
  // Estados para manejar los datos y la UI
  const [rut, setRut] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Función para mostrar notificaciones al usuario (Mejora UX)
  const mostrarMensaje = (mensaje: string, color: string) => {
    presentToast({
      message: mensaje,
      duration: 3000,
      color: color,
      position: 'bottom',
    });
  };

  const handleLogin = async () => {
    // Validación básica
    if (!rut || !contrasena) {
      mostrarMensaje('Por favor, ingresa tu RUT y contraseña.', 'warning');
      return;
    }

    setIsLoading(true); // Activa el spinner de carga (Mejora UI)

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rut, contrasena })
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenamiento Local (Punto EF1 cumplido)
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        
        mostrarMensaje('¡Bienvenido a Santo Domingo Digital!', 'success');
        
        // Redirección dependiendo del rol
        if (data.usuario.rol === 'admin') {
          history.push('/admin/dashboard');
        } else {
          history.push('/home'); // O la ruta que corresponda al ciudadano
        }
      } else {
        mostrarMensaje(data.error || 'Credenciales incorrectas.', 'danger');
      }
    } catch (error) {
      mostrarMensaje('Error al conectar con el servidor. Verifica tu conexión.', 'danger');
    } finally {
      setIsLoading(false); // Quita el spinner
    }
  };

  return (
    <IonPage>
      <IonContent style={{ '--background': '#f4f6f8' }}>
        <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          
          <IonCard style={{ width: '100%', maxWidth: '400px', padding: '30px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            <div className="ion-text-center ion-margin-bottom">
              <div style={{ backgroundColor: '#002855', color: 'white', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                <IonIcon icon={businessOutline} style={{ fontSize: '24px' }} />
              </div>
              <h2 style={{ color: '#002855', fontWeight: 'bold', margin: '0 0 5px 0' }}>Santo Domingo Digital</h2>
              <IonText color="medium"><p style={{ margin: 0, fontSize: '14px' }}>Acceso Administrativo / Ciudadano</p></IonText>
            </div>

            <div className="ion-margin-top">
              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>RUT</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={idCardOutline} color="medium" />
                <IonInput 
                  placeholder="11111111-1" 
                  type="text" 
                  value={rut}
                  onIonInput={(e: any) => setRut(e.target.value)}
                />
              </IonItem>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Contraseña</IonLabel>
                <a href="#" style={{ fontSize: '12px', color: '#002855', textDecoration: 'none', fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</a>
              </div>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={lockClosedOutline} color="medium" />
                <IonInput 
                  placeholder="........" 
                  type={showPassword ? "text" : "password"} 
                  value={contrasena}
                  onIonInput={(e: any) => setContrasena(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <IonIcon 
                  slot="end" 
                  icon={showPassword ? eyeOutline : eyeOffOutline} 
                  color="medium" 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => setShowPassword(!showPassword)}
                />
              </IonItem>

              <IonButton 
                expand="block" 
                style={{ '--background': '#001b3d', '--border-radius': '4px', marginTop: '25px', height: '45px' }} 
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? <IonSpinner name="crescent" /> : <>Ingresar <IonIcon slot="end" icon={logInOutline} /></>}
              </IonButton>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;