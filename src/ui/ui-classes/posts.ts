import IPost from "../../store/interfases/i-post";
import TUserId from '../../store/types/t-user-id';

export default class Posts {

  static filterPostsByAuthor(postsById: { [key: string]: IPost }, postsAllIds: string[], authors: TUserId[]) {
    if (!authors.length) return [];

    const postsArray = postsAllIds.map((id: string) => postsById[id]);

    return postsArray.filter(({ author }: IPost) => authors.includes(author));
  };
};
