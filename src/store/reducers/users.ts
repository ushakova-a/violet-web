import { combineReducers } from 'redux';
import { ADD_USER, UPDATE_USER } from '../keys';
import { users as defaultUsers } from '../default-store';
import ReducerUtils from './utils';
import IAction from '../interfases/i-action';
import IUser from '../interfases/i-user';

type TAction = IAction & { patch: IUser };

function usersById(state = defaultUsers.byId, action: TAction) {

  switch (action.type) {
    case ADD_USER:
    case UPDATE_USER:
      return ReducerUtils.addPatch(state, action);
    default:
      return state;
  };
};

function allUsers(state = defaultUsers.allIds, action: IAction) {
  switch (action.type) {
    case ADD_USER:
      return ReducerUtils.addId(state, action)
    default:
      return state
  }
}

export default combineReducers({
  byId: usersById,
  allIds: allUsers
});
