import IPost from "./interfases/i-post";
import IStoreTable from "./interfases/i-store-table";
import IStoreTableUsers from "./interfases/i-store-table-users";
import ISubscribtion from "./interfases/i-subscribtion";

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
  allIds: ["anna", "sasha", "zhenya"]
};

export interface IStoreTablePosts extends IStoreTable {
  byId: {
    [key: string]: IPost,
  },
};

export const posts: IStoreTablePosts = {
  byId: {
    "post1": {
      id: "post1",
      author: "anna",
      body: "test test test",
      likedBy: ["anna", "sasha"]
    },
    "post2": {
      id: "post2",
      author: "sasha",
      body: "blabla bla blah",
      likedBy: ["sasha"]
    }
  },
  allIds: ["post1", "post2"]
};

export interface IStoreTableSubscribtions extends IStoreTable {
  byId: {
    [key: string]: ISubscribtion,
  },
};

export const subscribtions: IStoreTableSubscribtions = {
  byId: {
    "subscribtion1": {
      id: "subscribtion1",
      subscriber: "anna",
      subscribtion: "sasha"
    },
    "subscribtion2": {
      id: "subscribtion2",
      subscriber: "anna",
      subscribtion: "zhenya"
    },
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
  },
  allIds: ["subscribtion1", "subscribtion2", "subscribtion3", "subscribtion4"]
};