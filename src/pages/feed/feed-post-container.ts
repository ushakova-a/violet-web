import { connect, ConnectedProps } from 'react-redux';
import IPost from '../../store/interfases/i-post';
import Posts from '../../ui/ui-classes/posts';
import TUserId from '../../store/types/t-user-id';
import IStore from '../../store/interfases/i-store';
import selectors from '../../store/selectors';

const {
  LoggedInUserSelector,
  UserSelector,
  PostSelector,
  SubscribtionSelector
} = selectors;

const connector = connect(
  (state: IStore) => ({
    loggedInUser: LoggedInUserSelector.getId(state),
    postsById: PostSelector.getPostsById(state),
    postsAllIds: PostSelector.getPostsIdArray(state),
    usersById: UserSelector.getUsersById(state),
    loggedInUserSubscribtions: SubscribtionSelector.getLoggedInUserSubscribtionIds(state),
  })
);

type TProps = ConnectedProps<typeof connector> & {
  children: (tabProps: any) => any,
  [key: string]: any,
};

export default connector(function FeedPostContainer({ children, ...props }: TProps) {

  console.log(props.loggedInUser)

  const createTabs = () => {
    const authorIds: { [key: string]: TUserId[] } = {
      subscribtions: props.loggedInUserSubscribtions,
      own: [props.loggedInUser]
    };
    const filteringKeys = (showPosts: string[]) => showPosts.flatMap((type: string) => authorIds[type]);
    const filterPosts = (showPosts: string[]) => Posts.filterPostsByAuthor(
      props.postsById,
      props.postsAllIds,
      filteringKeys(showPosts)
    );

    return [
      {
        id: 'all',
        title: 'Все посты',
        postsById: props.postsById,
        postsAllIds: props.postsAllIds
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
        name: props.usersById[author].name,
        path: `/profile/${props.usersById[author].name}`
      },
      body,
      likedBy: likedBy.map((userId: TUserId) => ({
        id: userId,
        name: props.usersById[userId].name,
        path: `/profile/${props.usersById[author].name}`
      })),
      liked: likedBy.includes(props.loggedInUser),
      onLike: () => handleLike(post)
    }
  };

  const handleLike = (post: IPost) => {
    const { likedBy } = post;
    const isLiked = likedBy.includes(props.loggedInUser);
    const newLikedBy = isLiked ?
      likedBy.filter((key: string) => key !== props.loggedInUser) :
      [...likedBy, props.loggedInUser];

    props.dispatch({
      type: 'UPDATE_POST',
      patch: { ...post, likedBy: newLikedBy }
    });
  };

  return children({ values: createTabs(), getPost })
});
