import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import IPost from '../../store/interfases/i-post';
import Subscribtions from '../../ui/ui-classes/subscribtions';
import Posts from '../../ui/ui-classes/posts';
import TUserId from '../../store/types/t-user-id';
import IUIPost from '../../components/post/i-ui-post';
import IStoreTableUsers from '../../store/interfases/i-store-table-users';

const connector = connect(
  (state: {
    users: IStoreTableUsers,
    [key: string]: any
  }) => ({
    loggedInUser: state.loggedInUser,
    users: state.users,
    posts: state.posts,
    subscribtions: state.subscribtions,
  })
);

type TProps = ConnectedProps<typeof connector> & {
  loggedInUser: TUserId,
  children: (tabProps: any) => any,
  [key: string]: any,
};

export default connector(FeedPostContainer)

//TODO написать методы для выгрузки стейта
function FeedPostContainer({ children, ...props }: TProps) {
  const { loggedInUser, users, posts, subscribtions, } = props;

  const createTabs = () => {
    const authorIds: { [key: string]: () => TUserId[] } = {
      subscribtions: () => Subscribtions.getUserSubscribtionKeys(subscribtions, loggedInUser),
      own: () => [loggedInUser]
    };
    const filteringKeys = (showPosts: string[]) => showPosts.flatMap((type: string) => authorIds[type]());
    const filterPosts = (showPosts: string[]) => Posts.filterPostsByAuthor(posts.byId, posts.allIds, filteringKeys(showPosts));

    return [
      {
        id: 'all',
        title: 'Все посты',
        postsById: posts.byId,
        postsAllIds: posts.allIds
      },
      {
        id: 'subscribtions',
        title: 'Подписки',
        postsById: filterPosts(['subscribtions', 'own']),
        postsAllIds: Object.keys(filterPosts(['subscribtions', 'own']))
      }
    ];
  };

  const getPost = (post: IPost) => {
    const { id, author, body, likedBy } = post;

    return {
      id,
      author: {
        id: author,
        name: users.byId[author].name,
        path: `/profile/${users.byId[author].name}`
      },
      body,
      likedBy: likedBy.map((userId: TUserId) => ({
        id: userId,
        name: users.byId[userId].name,
        path: `/profile/${users.byId[author].name}`
      })),
      liked: likedBy.includes(loggedInUser),
      onLike: () => handleLike(post),
      onDelete: handleDelete
    }
  };

  const handleLike = (post: IPost) => {
    const { likedBy } = post;
    const isLiked = likedBy.includes(loggedInUser);
    const newLikedBy = isLiked ?
      likedBy.filter((key: string) => key !== loggedInUser) :
      [...likedBy, loggedInUser];

    props.dispatch({
      type: 'UPDATE_POST',
      patch: { ...post, likedBy: newLikedBy }
    });
  };

  const handleDelete = () => {
  };

  return children({
    values: createTabs(),
    getPost
  })
};
