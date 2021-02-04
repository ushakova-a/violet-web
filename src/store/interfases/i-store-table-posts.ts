import IPost from "./i-post";
import IStoreTable from "./i-store-table";

export default interface IStoreTablePosts extends IStoreTable {
  byId: {
    [key: string]: IPost,
  },
};
