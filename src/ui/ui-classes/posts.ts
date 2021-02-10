import IPost from "../../store/interfases/i-post";
import TTableKey from "../../store/types/t-table-key";
import TUserId from '../../store/types/t-user-id';

export default class Posts {

  static filterPostsByAuthor(postsById: { [key: string]: IPost }, postsAllIds: string[], authors: TUserId[]) {
    if (!authors.length) return [];

    const postsArray = postsAllIds.map((id: string) => postsById[id]);

    return postsArray.filter(({ author }: IPost) => authors.includes(author));
  };

  static getFilteredPostIds(postsById: { [key: string]: IPost }, postsAllIds: string[], authors: TUserId[]) {
    if (!authors.length) return [];


    return postsAllIds.filter((id: TTableKey) => authors.includes(postsById[id].author))
  };
};
