import _ from 'lodash';
import IStoreTable from "../../interfases/i-store-table";
import IAction from "../../interfases/i-action";


export default function deletePatch(state: IStoreTable['byId'], { patch }: IAction) {
  const { id } = patch;

  const newState = _.cloneDeep(state);
  delete newState[id];

  return newState;
};
