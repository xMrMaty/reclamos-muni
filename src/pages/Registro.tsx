import React from 'react';
import { IonPage, IonContent, IonCard, IonInput, IonButton, IonIcon, IonText, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonCheckbox } from '@ionic/react';
import { personOutline, idCardOutline, mailOutline, checkmarkCircle, mapOutline, businessOutline, lockClosedOutline, eyeOffOutline, syncOutline, arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Registro: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent style={{ '--background': '#f4f6f8' }}>
        <div style={{ display: 'flex', minHeight: '100%', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          
          <div style={{ width: '100%', maxWidth: '450px' }}>
            <div className="ion-text-center ion-margin-bottom">
              <h2 style={{ color: '#002855', fontWeight: 'bold', margin: '0 0 5px 0' }}>Crear Cuenta</h2>
              <IonText color="medium"><p style={{ margin: 0, fontSize: '14px' }}>Únete a Santo Domingo Digital</p></IonText>
            </div>

            <IonCard style={{ padding: '30px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', margin: 0 }}>
              
              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Nombre Completo</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={personOutline} color="medium" />
                <IonInput placeholder="Ej. Juan Pérez" type="text" />
              </IonItem>

              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>RUT</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={idCardOutline} color="medium" />
                <IonInput placeholder="12.345.678-9" type="text" />
              </IonItem>

              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Correo Electrónico</IonLabel>
              <IonItem style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px', '--border-color': '#002855' }}>
                <IonIcon slot="start" icon={mailOutline} color="medium" />
                <IonInput placeholder="usuario@valido.com" type="email" value="usuario@valido.com" />
                <IonIcon slot="end" icon={checkmarkCircle} style={{ color: '#002855' }} />
              </IonItem>
              <div style={{ fontSize: '10px', color: '#002855', marginBottom: '15px', marginTop: '2px', paddingLeft: '5px' }}>Correo válido disponible.</div>

              <IonGrid style={{ padding: 0 }}>
                <IonRow>
                  <IonCol size="6" style={{ paddingLeft: 0, paddingRight: '5px' }}>
                    <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Región</IonLabel>
                    <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                      <IonIcon slot="start" icon={mapOutline} color="medium" />
                      <IonInput placeholder="Seleccione" readonly />
                    </IonItem>
                  </IonCol>
                  <IonCol size="6" style={{ paddingLeft: '5px', paddingRight: 0 }}>
                    <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Comuna</IonLabel>
                    <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                      <IonIcon slot="start" icon={businessOutline} color="medium" />
                      <IonInput placeholder="Seleccione" readonly />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Contraseña</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={lockClosedOutline} color="medium" />
                <IonInput placeholder="........" type="password" />
                <IonIcon slot="end" icon={eyeOffOutline} color="medium" style={{ cursor: 'pointer' }} />
              </IonItem>

              <IonLabel style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>Confirmar Contraseña</IonLabel>
              <IonItem className="ion-margin-bottom" style={{ '--border-radius': '4px', '--min-height': '45px', marginTop: '5px' }}>
                <IonIcon slot="start" icon={syncOutline} color="medium" />
                <IonInput placeholder="........" type="password" />
              </IonItem>

              <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '15px', marginBottom: '20px' }}>
                <IonCheckbox style={{ marginRight: '10px', marginTop: '2px' }} />
                <IonLabel style={{ fontSize: '12px', color: '#666', whiteSpace: 'normal' }}>
                  Acepto los <span style={{ color: '#002855', fontWeight: 'bold' }}>Términos y Condiciones</span> y la <span style={{ color: '#002855', fontWeight: 'bold' }}>Política de Privacidad</span>.
                </IonLabel>
              </div>

              <IonButton expand="block" style={{ '--background': '#001b3d', '--border-radius': '4px', height: '45px' }}>
                Crear Cuenta <IonIcon slot="end" icon={arrowForwardOutline} />
              </IonButton>

              <div className="ion-text-center" style={{ marginTop: '20px' }}>
                <IonText style={{ fontSize: '13px', color: '#666' }}>
                  ¿Ya tienes una cuenta? <a href="#" onClick={(e) => { e.preventDefault(); history.push('/login'); }} style={{ color: '#002855', fontWeight: 'bold', textDecoration: 'none' }}>Iniciar Sesión</a>
                </IonText>
              </div>

            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;