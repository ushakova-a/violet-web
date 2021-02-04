import TUserId from "../types/t-user-id";
import IStoreTablePosts from "./i-store-table-posts";
import IStoreTableSubscribtions from "./i-store-table-subscribtions";
import IStoreTableUsers from "./i-store-table-users";

export default interface IStore {
  [key: string]: any,
  loggedInUser: TUserId,
  selectedUser: TUserId,
  posts: IStoreTablePosts,
  users: IStoreTableUsers,
  subscribtions: IStoreTableSubscribtions,
};
