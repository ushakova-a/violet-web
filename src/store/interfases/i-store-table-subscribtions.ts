import IStoreTable from "./i-store-table";
import ISubscribtion from "./i-subscribtion";

export default interface IStoreTableSubscribtions extends IStoreTable {
  byId: {
    [key: string]: ISubscribtion,
  },
};
