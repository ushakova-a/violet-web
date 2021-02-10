import { combineReducers } from 'redux';
import { ADD_LIKE, DELETE_LIKE } from '../keys';
import { likes as defaultLikes } from '../default-store';
import ReducerUtils from './utils';
import IAction from '../interfases/i-action';

function likesById(state = defaultLikes.byId, action: IAction) {
  switch (action.type) {
    case ADD_LIKE:
      return ReducerUtils.addPatch(state, action)
    case DELETE_LIKE:
      return ReducerUtils.deletePatch(state, action)
    default:
      return state
  }
};

export default combineReducers({
  byId: likesById,
});
