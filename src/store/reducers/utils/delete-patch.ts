import IAction from "../../interfases/i-action";

export default function deletePatch(state: any, { patch }: IAction) {
  const { id } = patch;

  const newState = { ...state };
  delete newState[id];

  return newState;
};
