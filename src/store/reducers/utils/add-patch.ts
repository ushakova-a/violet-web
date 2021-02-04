import IAction from "../../interfases/i-action";
import IStoreTable from "../../interfases/i-store-table";

export default function addPatch(state: IStoreTable['byId'], { patch }: IAction) {
  const { id } = patch;

  return { ...state, [id]: patch }
};
