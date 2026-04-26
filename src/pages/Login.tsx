import React from 'react';
import { IonPage, IonContent, IonCard, IonInput, IonButton, IonIcon, IonText, IonItem, IonLabel } from '@ionic/react';
import { businessOutline, idCardOutline, lockClosedOutline, eyeOffOutline, logInOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      {/* Fondo gris claro como en el mockup */}
      <IonContent style={{ '--background': '#f4f6f8' }}>
        <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          
          <IonCard style={{ width: '100%', maxWidth: '400px', padding: '30px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            {/* Logo y Títulos */}
            <div className="ion-text-center ion-margin-bottom">
              <div style={{ backgroundColor: '#002855', color: 'white', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                <IonIcon icon={businessOutline} style={{ fontSize: '24px' }} />
              </div>
              <h2 style={{ color: '#002855', fontWeight: 'bold', margin: '0 0 5px 0' }}>Santo Domingo Digital</h2>
              <IonText color="medium"><p style={{ margin: 0, fontSize: '14px' }}>Acceso Ciudadano</p></IonText>
            </div>

            {/* Formulario */}
            <div className="ion-margin-top">
              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>RUT</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={idCardOutline} color="medium" />
                <IonInput placeholder="12.345.678-9" type="text" />
              </IonItem>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Contraseña</IonLabel>
                <a href="#" style={{ fontSize: '12px', color: '#002855', textDecoration: 'none', fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</a>
              </div>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={lockClosedOutline} color="medium" />
                <IonInput placeholder="........" type="password" />
                <IonIcon slot="end" icon={eyeOffOutline} color="medium" style={{ cursor: 'pointer' }} />
              </IonItem>

              {/* Botón Ingresar */}
              <IonButton expand="block" style={{ '--background': '#001b3d', '--border-radius': '4px', marginTop: '25px', height: '45px' }} onClick={() => history.push('/admin/dashboard')}>
                Ingresar <IonIcon slot="end" icon={logInOutline} />
              </IonButton>
            </div>

            {/* Footer de registro */}
            <div className="ion-text-center" style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <IonText style={{ fontSize: '13px', color: '#666' }}>
                ¿No tienes cuenta? <a href="#" onClick={(e) => { e.preventDefault(); history.push('/registro'); }} style={{ color: '#002855', fontWeight: 'bold', textDecoration: 'none' }}>Regístrate</a>
              </IonText>
            </div>

          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;