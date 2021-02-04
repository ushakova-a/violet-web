// import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import FeedPage from './pages/feed';

import NotFound from './pages/not-found';

const Routes = [
  {
    path: '/',
    exact: true,
    component: LoginPage,
  },
  {
    path: "/profile",
    render: () => <Redirect to="/feed" />
  },
  {
    path: "/profile/:id",
    component: ProfilePage,
    routes: [
      {
        path: "/profile/:id/followers",
        component: ProfilePage
      },
      {
        path: "/profile/:id/subscribtions",
        component: ProfilePage
      }
    ]
  },
  {
    path: '/feed',
    component: FeedPage,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;