import { ROUTER_PATH } from '@/constants/router';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('@pages/HomePage'));
const SearchPage = lazy(() => import('@pages/Search'));
const NewsPage = lazy(() => import('@pages/News'));
const WatchListPage = lazy(() => import('@pages/WatchList'));
const StockDetailPage = lazy(() => import('@pages/StockDetail'));
const LoginPage = lazy(() => import('@pages/auth/Login'));
const RegisterPage = lazy(() => import('@pages/auth/Register'));
const PublicLayout = lazy(() => import('@components/PublicLayout'));
const PrivateLayout = lazy(() => import('@components/PrivateLayout'));

export interface RouteConfig {
  path: string;
  element?: any;
  title?: string;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: ROUTER_PATH.AUTH,
    element: PublicLayout,
    children: [
      {
        path: ROUTER_PATH.AUTH_LOGIN,
        element: LoginPage,
        title: 'Login',
      },
      {
        path: ROUTER_PATH.AUTH_REGISTER,
        element: RegisterPage,
        title: 'Register',
      },
    ],
  },

  {
    path: '/',
    element: PrivateLayout,
    children: [
      { path: '', element: React.createElement(Navigate, { to: ROUTER_PATH.DASH_BOARD, replace: true }) },
      { path: ROUTER_PATH.DASH_BOARD, element: HomePage, title: 'Home' },
      { path: ROUTER_PATH.SEARCH, element: SearchPage, title: 'Search' },
      { path: ROUTER_PATH.WATCHLIST, element: WatchListPage, title: 'WatchList' },
      { path: ROUTER_PATH.NEWS, element: NewsPage, title: 'News' },
      { path: ROUTER_PATH.STOCK_DETAIL, element: StockDetailPage, title: 'Stock Detail' },
    ],
  },
  {
    path: ROUTER_PATH.OTHER,
    element: lazy(() =>
      Promise.resolve({
        default: () => React.createElement('div', null, '404 Not Found'),
      })
    ),
    title: '404 Not Found',
  },
]

export default routes;
