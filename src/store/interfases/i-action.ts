export default interface IAction {
  type: string,
  patch: {
    id: string,
    [key: string]: any
  }
};
