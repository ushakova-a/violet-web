import IAction from "../../interfases/i-action";

export default function deleteId(state: string[], { patch }: IAction) {
  const { id } = patch;

  return state.filter((stateId: string) => stateId !== id)
};
