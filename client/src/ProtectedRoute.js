import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  return isAuthenticated ? element : <Navigate to="/404" />;
};

export default ProtectedRoute;
