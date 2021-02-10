import TTableKey from '../types/t-table-key';
import TUserId from '../types/t-user-id';

export default interface IPost {
  id: TTableKey;
  author: TUserId,
  body: React.ReactNode;
};
