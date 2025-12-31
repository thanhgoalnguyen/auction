import { useAuth } from '../contexts/AuthContext';
import TopLogin from './TopLogin';
import TopNoLogin from './TopNoLogin';

export default function Top() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <TopLogin /> : <TopNoLogin />;
}

