import { Navigate } from 'react-router';

import { Role } from '../types/role.types';
import { pathConfig } from '../config/path-config';

type Props = {
  roles?: Role[];
  element?: React.ReactNode;
};

export default function RoleMiddleware({ roles, element }: Props) {
  const role = localStorage.getItem('role');

  if (role === null) {
    return <Navigate to={pathConfig.error.forbiden} />;
  }

  if (roles && roles?.includes(role as Role)) {
    return <Navigate to={pathConfig.error.forbiden} />;
  }

  return element;
}
