import TTableKey from "../types/t-table-key";

export default interface IAction {
  type: string,
  patch: {
    id: TTableKey,
    [key: string]: any
  }
};
