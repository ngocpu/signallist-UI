import { lazy, type JSX } from 'react';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  title?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: HomePage,
    title: 'Home',
  },
  // Add more routes here
];

export default routes;
