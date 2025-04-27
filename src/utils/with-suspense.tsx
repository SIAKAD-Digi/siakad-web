import React, { Suspense, ReactNode, ComponentType } from 'react';

import PageProgress from '../components/progress/PageProgress';

export function withSuspense<T extends object>(
  Component: React.LazyExoticComponent<ComponentType<T>>,
  fallback: ReactNode = <PageProgress />,
): React.FC<T> {
  return (props: T) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
}
