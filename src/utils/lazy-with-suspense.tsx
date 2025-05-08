import React from 'react';

import { withSuspense } from './with-suspense';

export function lazyWithSuspense<T extends object>(
  factory: () => Promise<{ default: React.ComponentType<T> }>,
  fallback?: React.ReactNode,
): React.FC<T> {
  const LazyComponent = React.lazy(factory);
  return withSuspense(LazyComponent, fallback);
}
