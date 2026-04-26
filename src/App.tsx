import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

/* Vistas */
import Registro from './pages/Registro';
import AdminReclamoDetalle from './pages/AdminReclamoDetalle';
import Login from './pages/Login';
import NuevoReclamo from './pages/NuevoReclamo';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

/* Core CSS de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <ProtectedRoute exact path="/admin/reclamo/:id" component={AdminReclamoDetalle} />
        <Route exact path="/login" component={Login} />
        
        {/* Rutas Protegidas */}
        <ProtectedRoute exact path="/nuevo-reclamo" component={NuevoReclamo} />
        <ProtectedRoute exact path="/admin/dashboard" component={AdminDashboard} />
        
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;