import IUIUser from "../../store/interfases/i-ui-user";

export default interface IUIPost {
  author: IUIUser,
  body: React.ReactNode,
  liked: boolean,
  likedBy: IUIUser[],
  onLike: () => void,
  onClose: () => void
};