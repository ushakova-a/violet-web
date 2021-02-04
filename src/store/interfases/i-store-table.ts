export default interface IStoreTable {
  [key: string]: any,
  byId: {
    [key: string]: {
      id: string,
      [key: string]: any,
    },
  },
  allIds: string[]
};
