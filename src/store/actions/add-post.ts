import generateId from "../../utils/generate-id";
import { ADD_POST } from "../keys";

export default function addPost(post: any) {
  return (dispatch: any) => {
    const id = generateId('post');



    dispatch({ type: ADD_POST, patch: { ...post, id } })
  }
}