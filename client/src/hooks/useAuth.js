import { selectLoginState } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function useAuth() {
  const authState = useSelector(selectLoginState);


  return authState;
}
