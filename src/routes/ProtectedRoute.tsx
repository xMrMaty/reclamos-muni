import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  // Simulación de sesión activa. 
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;