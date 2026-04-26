import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonSplitPane, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonBadge, IonAvatar } from '@ionic/react';
import { gridOutline, listOutline, barChartOutline, logOutOutline, notificationsOutline, downloadOutline, warningOutline, checkmarkCircleOutline, timeOutline, folderOpenOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const history = useHistory();

  return (
    <IonSplitPane contentId="main-content" style={{ '--side-width': '250px' }}>
      
      {/* MENÚ LATERAL */}
      <IonMenu contentId="main-content">
        <IonHeader className="ion-no-border">
          <IonToolbar style={{ padding: '20px 10px' }}>
            <h2 style={{ color: '#002855', fontWeight: 'bold', margin: '0 0 20px 15px' }}>Admin OIRS</h2>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
              <IonAvatar style={{ width: '40px', height: '40px', backgroundColor: '#20c997', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>AU</span>
              </IonAvatar>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Admin User</h4>
                <span style={{ fontSize: '12px', color: '#666' }}>Municipality Admin</span>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            <IonItem button style={{ '--background': '#f4f6f8', borderLeft: '4px solid #002855', fontWeight: 'bold', color: '#002855' }}>
              <IonIcon slot="start" icon={gridOutline} color="primary" />
              <IonLabel>Panel de Control</IonLabel>
            </IonItem>
            <IonItem button onClick={() => history.push('/admin/reclamo/1')}>
              <IonIcon slot="start" icon={listOutline} color="medium" />
              <IonLabel color="medium">Gestión de Reclamos</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={barChartOutline} color="medium" />
              <IonLabel color="medium">Reportes</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <IonItem button lines="none" onClick={() => history.push('/login')} style={{ '--padding-start': '0' }}>
            <IonIcon slot="start" icon={logOutOutline} color="medium" />
            <IonLabel color="medium">Cerrar Sesión</IonLabel>
          </IonItem>
        </div>
      </IonMenu>

      {/* CONTENIDO PRINCIPAL */}
      <IonPage id="main-content">
        <IonHeader className="ion-no-border" style={{ borderBottom: '1px solid #eee' }}>
          <IonToolbar style={{ padding: '10px 20px' }}>
            <div>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '22px', fontWeight: 'bold', color: '#333' }}>Vista General del Panel</h1>
              <span style={{ fontSize: '14px', color: '#666' }}>Estado en tiempo real de los reclamos municipales.</span>
            </div>
            <div slot="end" style={{ display: 'flex', alignItems: 'center' }}>
              <IonIcon icon={notificationsOutline} style={{ fontSize: '24px', marginRight: '20px', color: '#333', cursor: 'pointer' }} />
              <IonButton style={{ '--background': '#001b3d', '--border-radius': '6px' }}>
                <IonIcon slot="start" icon={downloadOutline} /> Exportar Reporte
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding" style={{ '--background': '#f9fafc' }}>
          
          {/* TARJETAS KPI */}
          <IonGrid style={{ padding: 0, marginBottom: '20px' }}>
            <IonRow>
              <IonCol size="4">
                <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee' }}>
                  <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Total Reclamos (Año)</h3>
                      <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#111' }}>1,248</h2>
                        <span style={{ color: '#20c997', marginLeft: '10px', fontSize: '14px', fontWeight: 'bold' }}>~+12%</span>
                      </div>
                    </div>
                    <IonIcon icon={folderOpenOutline} style={{ fontSize: '40px', color: '#e0e0e0' }} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="4">
                <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee' }}>
                  <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Pendientes de Resolución</h3>
                      <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#111' }}>342</h2>
                        <IonBadge style={{ '--background': '#7a4b2b', marginLeft: '10px' }}>Requiere Acción</IonBadge>
                      </div>
                    </div>
                    <IonIcon icon={timeOutline} style={{ fontSize: '40px', color: '#e0e0e0' }} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="4">
                <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee' }}>
                  <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Resueltos (Últimos 30 días)</h3>
                      <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#111' }}>89</h2>
                        <span style={{ color: '#20c997', marginLeft: '10px', fontSize: '14px', fontWeight: 'bold' }}>~+5%</span>
                      </div>
                    </div>
                    <IonIcon icon={checkmarkCircleOutline} style={{ fontSize: '40px', color: '#e0e0e0' }} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* ALERTA ROJA */}
          <div style={{ backgroundColor: '#fdeded', border: '1px solid #f5c6c6', borderRadius: '8px', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IonIcon icon={warningOutline} style={{ color: '#d32f2f', fontSize: '24px', marginRight: '15px' }} />
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#d32f2f', fontWeight: 'bold', fontSize: '14px' }}>Atención Urgente Requerida</h4>
                <p style={{ margin: 0, color: '#d32f2f', fontSize: '14px' }}>Hay 12 reclamos que se acercan al límite legal de resolución de 20 días. Por favor, revise de inmediato.</p>
              </div>
            </div>
            <IonButton color="danger" style={{ fontWeight: 'bold' }}>Ver Críticos</IonButton>
          </div>

          {/* TABLA DE RECLAMOS (Imitando el diseño) */}
          <IonCard style={{ margin: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #eee' }}>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Reclamos Recientes</h2>
              {/* Aquí iría el buscador del mockup */}
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafc', color: '#666', borderBottom: '1px solid #eee' }}>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>ID Reclamo</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>Ciudadano</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>Categoría</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>Fecha Ingreso</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>Estado</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>SLA</th>
                    <th style={{ padding: '15px 20px', fontWeight: 'bold' }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Fila 1 - Peligro */}
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>#OIRS-2023-1042</td>
                    <td style={{ padding: '15px 20px', display: 'flex', alignItems: 'center' }}>
                      <IonAvatar style={{ width: '30px', height: '30px', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}><span style={{color:'#4f46e5', fontSize:'12px', fontWeight:'bold'}}>MC</span></IonAvatar>
                      Maria Caro
                    </td>
                    <td style={{ padding: '15px 20px' }}>Alumbrado Público</td>
                    <td style={{ padding: '15px 20px' }}>Oct 12, 2023</td>
                    <td style={{ padding: '15px 20px' }}><IonBadge color="light" style={{color:'#666'}}>En Proceso</IonBadge></td>
                    <td style={{ padding: '15px 20px' }}><IonBadge color="danger" style={{'--background':'#fee2e2', color:'#b91c1c'}}><IonIcon icon={timeOutline}/> 19 Días</IonBadge></td>
                    <td style={{ padding: '15px 20px' }}><a href="#" style={{color:'#002855', fontWeight:'bold', textDecoration:'none'}}>Revisar</a></td>
                  </tr>
                  {/* Fila 2 - Advertencia */}
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>#OIRS-2023-1045</td>
                    <td style={{ padding: '15px 20px', display: 'flex', alignItems: 'center' }}>
                      <IonAvatar style={{ width: '30px', height: '30px', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}><span style={{color:'#4f46e5', fontSize:'12px', fontWeight:'bold'}}>JP</span></IonAvatar>
                      Juan Perez
                    </td>
                    <td style={{ padding: '15px 20px' }}>Baches</td>
                    <td style={{ padding: '15px 20px' }}>Oct 15, 2023</td>
                    <td style={{ padding: '15px 20px' }}><IonBadge color="light" style={{color:'#666'}}>Asignado</IonBadge></td>
                    <td style={{ padding: '15px 20px' }}><IonBadge color="warning" style={{'--background':'#fef3c7', color:'#d97706'}}><IonIcon icon={warningOutline}/> 16 Días</IonBadge></td>
                    <td style={{ padding: '15px 20px' }}><a href="#" style={{color:'#002855', fontWeight:'bold', textDecoration:'none'}}>Revisar</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </IonCard>

        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default AdminDashboard;