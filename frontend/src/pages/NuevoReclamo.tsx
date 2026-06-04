import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonItem, IonSelect, IonSelectOption, IonTextarea, IonButton } from '@ionic/react';
import { homeOutline, addCircleOutline } from 'ionicons/icons';

const NuevoReclamo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nuevo Reclamo</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <h3>Detalles del Problema</h3>
        <IonItem>
          <IonSelect label="Categoría del problema" placeholder="Seleccione una categoría">
            <IonSelectOption value="aseo">Aseo y Ornato</IonSelectOption>
            <IonSelectOption value="luminaria">Luminaria Pública</IonSelectOption>
            <IonSelectOption value="transito">Tránsito</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonTextarea label="Descripción" placeholder="Describa el problema detalladamente..." autoGrow={true}></IonTextarea>
        </IonItem>
        <IonButton expand="block" className="ion-margin-top">Adjuntar Fotografía</IonButton>
        <IonButton expand="block" color="dark" className="ion-margin-top">Enviar Reclamo</IonButton>
      </IonContent>

      {/* Navegación Inferior Móvil */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="nuevo">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>New Claim</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default NuevoReclamo;