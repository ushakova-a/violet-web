import TTableKey from '../types/t-table-key';
import TUserId from '../types/t-user-id';

export default interface ISubscribtion {
  id: TTableKey,
  subscriber: TUserId,
  subscribtion: TUserId
};
