import { combineReducers } from 'redux';
import { ADD_SUBSCRIBTION, DELETE_SUBSCRIBTION } from '../keys';
import { subscribtions as defaultSubscribtions } from '../default-store';
import ReducerUtils from './utils';
import IAction from '../interfases/i-action';

function subscribtionsById(state = defaultSubscribtions.byId, action: IAction) {
  switch (action.type) {
    case ADD_SUBSCRIBTION:
      return ReducerUtils.addPatch(state, action)
    case DELETE_SUBSCRIBTION:
      return ReducerUtils.deletePatch(state, action)
    default:
      return state
  }
};

// function allSubscribtions(state = defaultSubscribtions.allIds, action: IAction) {
//   switch (action.type) {
//     case ADD_SUBSCRIBTION:
//       return ReducerUtils.addId(state, action)
//     case DELETE_SUBSCRIBTION:
//       return ReducerUtils.deleteId(state, action)
//     default:
//       return state
//   }
// };

export default combineReducers({
  byId: subscribtionsById,
  // allIds: allSubscribtions
});
