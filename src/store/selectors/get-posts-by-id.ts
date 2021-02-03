import _ from 'lodash';

export default class PostSelector {

  static getPostsById(state: any) { return state.posts.byId };

  static getPostsIdArray(state: any) { return _.keys(state.posts.byId) };


  static getUserPostsById(posts: any, id: string) {
    const keys = _.keys(posts.byId);

    const result = _.pickBy(posts.byId, (value) => {
      return value.author === id;
    });

    return result;
  };


  static getUserPostsIdArray(posts: any, id: string) {
    const keys = _.keys(posts.byId);

    return keys.filter((key: string) => posts.byId[key].author === id);
  };

  static getLoggedInUserPostsById({ posts, loggedInUser, selectedUser }: any) {

    if (loggedInUser === selectedUser)

      return this.getUserPostsById(
        posts,
        loggedInUser
      );
  };

  static getLoggedInPostsIdArray({ posts, uuid }: any) {
    const keys = _.keys(posts.byId);

    return keys.filter((key: string) => posts.byId[key].author === uuid);
  };


};
