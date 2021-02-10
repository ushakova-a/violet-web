import { combineReducers } from 'redux';
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../keys';
import { posts as defaultPosts } from '../default-store';
import IPost from '../interfases/i-post';
import ReducerUtils from './utils';
import IAction from '../interfases/i-action';

type TAction = IAction & { patch: IPost };

function postsById(state = defaultPosts.byId, action: TAction) {
  switch (action.type) {
    case ADD_POST:
    case UPDATE_POST:
      return ReducerUtils.addPatch(state, action)
    case DELETE_POST:
      return ReducerUtils.deletePatch(state, action)
    default:
      return state
  }
};

// function allPosts(state = defaultPosts.allIds, action: IAction) {
//   switch (action.type) {
//     case ADD_POST:
//       return ReducerUtils.addId(state, action)
//     case DELETE_POST:
//       return ReducerUtils.deleteId(state, action)
//     default:
//       return state
//   }
// }

export default combineReducers({
  byId: postsById,
  // allIds: allPosts
});
