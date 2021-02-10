import TTableKey from "../types/t-table-key";

export default interface IStoreTable {
  [key: string]: any,
  byId: {
    [key: string]: {
      id: TTableKey,
      [key: string]: any,
    },
  }
};
