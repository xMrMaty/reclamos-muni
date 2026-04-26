import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonButton, IonBadge, IonAvatar, IonSelect, IonSelectOption } from '@ionic/react';
import { arrowBackOutline, documentTextOutline, locationOutline, timeOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const AdminReclamoDetalle: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className="ion-no-border" style={{ borderBottom: '1px solid #eee' }}>
        <IonToolbar style={{ padding: '5px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#666', fontSize: '14px', marginBottom: '10px' }} onClick={() => history.goBack()}>
            <IonIcon icon={arrowBackOutline} style={{ marginRight: '5px' }} /> Volver a Gestión de Reclamos
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#002855' }}>Reclamo #OIRS-2023-0492</h1>
            <IonBadge style={{ '--background': '#fee2e2', color: '#d32f2f', padding: '8px 12px', fontSize: '12px' }}>
              <IonIcon icon={timeOutline} style={{ marginRight: '4px' }}/> VENCE EN 2 DÍAS
            </IonBadge>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{ '--background': '#f9fafc' }}>
        <IonGrid>
          <IonRow>
            {/* COLUMNA IZQUIERDA: DETALLES */}
            <IonCol size="8" style={{ paddingRight: '20px' }}>
              <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee', borderRadius: '8px' }}>
                <div style={{ padding: '15px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                    <IonIcon icon={documentTextOutline} style={{ marginRight: '10px', fontSize: '20px' }} /> Detalles del Reclamo
                  </div>
                  <IonBadge color="light" style={{ color: '#666' }}>Ingresado: 12 Oct 2023</IonBadge>
                </div>
                
                <div style={{ padding: '20px' }}>
                  <IonGrid style={{ padding: 0 }}>
                    <IonRow style={{ marginBottom: '20px' }}>
                      <IonCol size="6">
                        <div style={{ fontSize: '10px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>Asunto</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Bache peligroso en Av. Las Camelias</div>
                      </IonCol>
                      <IonCol size="6">
                        <div style={{ fontSize: '10px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>Categoría</div>
                        <div style={{ fontSize: '14px', color: '#333' }}>Vialidad y Tránsito</div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>

                  <div style={{ fontSize: '10px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>Descripción del Ciudadano</div>
                  <div style={{ padding: '15px', backgroundColor: '#f9fafc', border: '1px solid #eee', borderRadius: '4px', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
                    "Hace más de dos semanas se formó un bache muy profundo en la intersección con calle Los Pinos. Varios autos han sufrido daños en los neumáticos y es un peligro para los ciclistas en la noche porque no hay buena iluminación en esa esquina específica."
                  </div>

                  <div style={{ fontSize: '10px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '20px', marginBottom: '5px' }}>Ubicación Reportada</div>
                  <div style={{ fontSize: '14px', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    <IonIcon icon={locationOutline} style={{ marginRight: '5px' }} /> Av. Las Camelias con Los Pinos, Santo Domingo
                  </div>
                  <div style={{ height: '150px', backgroundColor: '#334155', borderRadius: '4px', width: '100%', marginBottom: '20px' }}>
                     {/* Placeholder del mapa */}
                  </div>

                  <div style={{ fontSize: '10px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Archivos Adjuntos (2)</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '80px', height: '80px', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>
                    <div style={{ width: '80px', height: '80px', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </IonCard>

              {/* TARJETA SOLICITANTE */}
              <IonCard style={{ margin: '20px 0 0 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee', borderRadius: '8px', padding: '20px' }}>
                <IonGrid style={{ padding: 0 }}>
                  <IonRow className="ion-align-items-center">
                    <IonCol size="4" style={{ display: 'flex', alignItems: 'center' }}>
                      <IonAvatar style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                        <span style={{ color: '#1e40af', fontWeight: 'bold' }}>MP</span>
                      </IonAvatar>
                      <div>
                        <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Solicitante</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>María Pérez G.</div>
                      </div>
                    </IonCol>
                    <IonCol size="3">
                      <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>RUT</div>
                      <div style={{ fontSize: '14px', color: '#333' }}>15.XXX.XXX-X</div>
                    </IonCol>
                    <IonCol size="2">
                      <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Teléfono</div>
                      <div style={{ fontSize: '14px', color: '#333' }}>+56 9 8765 4321</div>
                    </IonCol>
                    <IonCol size="3">
                      <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Correo Electrónico</div>
                      <div style={{ fontSize: '14px', color: '#002855', fontWeight: 'bold', wordBreak: 'break-all' }}>m.perez@email.com</div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>

            {/* COLUMNA DERECHA: ACCIONES */}
            <IonCol size="4">
              <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee', borderRadius: '8px' }}>
                <div style={{ padding: '15px 20px', backgroundColor: '#0f172a', color: 'white', display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                  <IonIcon icon={settingsOutline} style={{ marginRight: '10px' }} /> Acciones de Gestión
                </div>
                
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Estado Actual</div>
                  <IonItem fill="outline" style={{ '--border-radius': '4px', '--min-height': '40px', marginBottom: '20px' }}>
                    <IonSelect value="revision" interface="popover" style={{ width: '100%' }}>
                      <IonSelectOption value="nuevo">Nuevo</IonSelectOption>
                      <IonSelectOption value="revision">En Revisión</IonSelectOption>
                      <IonSelectOption value="asignado">Asignado</IonSelectOption>
                      <IonSelectOption value="resuelto">Resuelto</IonSelectOption>
                    </IonSelect>
                  </IonItem>

                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Derivar a Unidad Técnica</div>
                  <IonItem fill="outline" style={{ '--border-radius': '4px', '--min-height': '40px', marginBottom: '20px' }}>
                    <IonSelect placeholder="Seleccione unidad..." interface="popover" style={{ width: '100%' }}>
                      <IonSelectOption value="vialidad">Vialidad</IonSelectOption>
                      <IonSelectOption value="aseo">Aseo y Ornato</IonSelectOption>
                      <IonSelectOption value="obras">Dirección de Obras</IonSelectOption>
                    </IonSelect>
                  </IonItem>

                  <hr style={{ borderTop: '1px solid #eee', margin: '20px 0' }} />

                  <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.4', marginBottom: '15px' }}>
                    Si la resolución requiere mayor tiempo técnico, puede solicitar una extensión del plazo legal.
                  </p>
                  
                  <IonButton expand="block" fill="outline" style={{ '--color': '#002855', '--border-color': '#e2e8f0', '--background': '#f8fafc', marginBottom: '20px', textTransform: 'none', fontWeight: 'bold' }}>
                    <IonIcon slot="start" icon={timeOutline} /> Registrar Ampliación de<br/>Plazo Legal (+10 días)
                  </IonButton>

                  <IonButton expand="block" style={{ '--background': '#001b3d', '--border-radius': '4px', height: '45px', fontWeight: 'bold' }}>
                    <IonIcon slot="start" icon={saveOutline} /> Guardar Cambios
                  </IonButton>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AdminReclamoDetalle;