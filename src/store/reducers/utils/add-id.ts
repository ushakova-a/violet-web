import IAction from "../../interfases/i-action";

export default function addId(state: string[], { patch }: IAction) {
  const { id } = patch;

  return [...state, id]
};
