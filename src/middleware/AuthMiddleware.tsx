import { Navigate } from 'react-router';
import { pathConfig } from '../config/path-config';

type Props = {
  element?: React.ReactNode;
};

export default function AuthMiddleware({ element }: Props) {
  const isAuth = !!localStorage.getItem('access-token');

  if (!isAuth) {
    return <Navigate to={pathConfig.auth.login} />;
  }

  return element;
}
