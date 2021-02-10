import ILike from "./i-like";
import IStoreTable from "./i-store-table";

export default interface IStoreTableLikes extends IStoreTable {
  byId: {
    [key: string]: ILike,
  },
};
