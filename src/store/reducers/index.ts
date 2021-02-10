import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loggedInUser from './logged-in-user';
import selectedUser from './selected-user';
import users from './users';
import subscribtions from './subscribtions';
import posts from './posts';
import likes from './likes';

export default (history: any) => combineReducers({
  router: connectRouter(history),
  loggedInUser,
  selectedUser,
  users,
  subscribtions,
  posts,
  likes
});