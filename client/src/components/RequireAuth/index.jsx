import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RequireAuth() {
  const authState = useAuth();
  const location = useLocation();
  console.log(authState);
  
  return authState ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
