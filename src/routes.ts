// import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import FeedPage from './pages/feed';
import FollowersPage from './pages/followers';
import SubscribtionsPage from './pages/subscribtions';

import NotFound from './pages/not-found';

const Routes: { [key: string]: any } = [
  {
    path: '/',
    exact: true,
    component: LoginPage,
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
    path: '/followers',
    component: FollowersPage,
  },
  {
    path: '/subscribtions',
    component: SubscribtionsPage,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;