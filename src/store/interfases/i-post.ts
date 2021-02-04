import TUserId from '../types/t-user-id';

export default interface IPost {
  id: string;
  author: TUserId,
  body: React.ReactNode;
  likedBy: TUserId[]
};
