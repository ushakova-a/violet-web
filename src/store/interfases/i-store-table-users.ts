import IStoreTable from "./i-store-table";
import IUser from "./i-user";

export default interface IStoreTableUsers extends IStoreTable {
  byId: {
    [key: string]: IUser,
  }
};
