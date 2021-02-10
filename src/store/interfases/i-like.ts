import TPostId from '../types/t-post-id';
import TTableKey from '../types/t-table-key';
import TUserId from '../types/t-user-id';

export default interface ILike {
  id: TTableKey,
  user: TUserId,
  post: TPostId
};
