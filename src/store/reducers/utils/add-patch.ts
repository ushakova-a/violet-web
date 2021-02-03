import IAction from "../../interfases/i-action";

export default function addPatch(state: any, { patch }: IAction) {
  const { id } = patch;

  return { ...state, [id]: patch }
};
