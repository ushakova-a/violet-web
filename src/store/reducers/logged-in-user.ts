import TUserId from '../types/t-user-id';
import {
  ADD_LOGGED_IN_USER,
  DELETE_LOGGED_IN_USER
} from '../keys';

type TLoggedInUserId = TUserId | null;

type TAction = {
  type: string,
  id: TLoggedInUserId
};

const defautState: TLoggedInUserId = null;


export default (state = defautState, { type, id }: TAction) => {
  switch (type) {
    case ADD_LOGGED_IN_USER:
      return id;
    case DELETE_LOGGED_IN_USER:
      return defautState;
    default:
      return state;
  }
};