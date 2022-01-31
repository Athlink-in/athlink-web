import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/authContext';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return (
    currentUser ? <Outlet /> : <Navigate to='/login' />
  );
}
