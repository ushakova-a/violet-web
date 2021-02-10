import IStoreTablePosts from "./interfases/i-store-table-posts";
import IStoreTableSubscribtions from "./interfases/i-store-table-subscribtions";
import IStoreTableLikes from "./interfases/i-store-table-likes";
import IStoreTableUsers from "./interfases/i-store-table-users";

export const users: IStoreTableUsers = {
  byId: {
    "anna": {
      id: "anna",
      name: "Anna",
    },
    "sasha": {
      id: "sasha",
      name: "Sasha",
    },
    "zhenya": {
      id: "zhenya",
      name: "Zhenya",
    }
  },
};

export const posts: IStoreTablePosts = {
  byId: {
    "post1": {
      id: "post1",
      author: "anna",
      body: "test test test",
    },
    "post2": {
      id: "post2",
      author: "sasha",
      body: "blabla bla blah"
    },
    "post3": {
      id: "post3",
      author: "zhenya",
      body: "blabla bla blah lorem ispum"
    }
  },
};

export const subscribtions: IStoreTableSubscribtions = {
  byId: {
    "subscribtion1": {
      id: "subscribtion1",
      subscriber: "anna",
      subscribtion: "sasha"
    },
    // "subscribtion2": {
    //   id: "subscribtion2",
    //   subscriber: "anna",
    //   subscribtion: "zhenya"
    // },
    "subscribtion3": {
      id: "subscribtion3",
      subscriber: "sasha",
      subscribtion: "anna"
    },
    "subscribtion4": {
      id: "subscribtion4",
      subscriber: "zhenya",
      subscribtion: "sasha"
    },
  }
};

export const likes: IStoreTableLikes = {
  byId: {
    "like1": {
      id: "like1",
      user: "anna",
      post: "post1"
    },
    "like2": {
      id: "like2",
      user: "sasha",
      post: "post1",

    },
    "like3": {
      id: "like3",
      user: "sasha",
      post: "post2"
    }
  }
};
