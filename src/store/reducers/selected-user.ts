import TUserId from '../types/t-user-id';
import {
  ADD_SELECTED_USER,
  DELETE_SELECTED_USER
} from '../keys';

type TSelectedUserId = TUserId | null;

type TAction = {
  type: string,
  id: TUserId
};

const defautState: TSelectedUserId = null;

export default (state = defautState, { type, id }: TAction) => {
  switch (type) {
    case ADD_SELECTED_USER:
      return id;
    case DELETE_SELECTED_USER:
      return defautState;
    default:
      return state;
  }
};