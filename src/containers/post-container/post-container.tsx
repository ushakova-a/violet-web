import { connect, ConnectedProps } from 'react-redux';
import IStore from '../../store/interfases/i-store';
import selectors from '../../store/selectors';
import TTableKey from '../../store/types/t-table-key';
import selectBy from '../../store/selectors/utils/select-by';
import generateId from '../../utils/generate-id';
import { ADD_LIKE, DELETE_LIKE } from '../../store/keys';

const {
  LoggedInUserSelector,
  UserSelector,
  PostSelector,
  LikeSelector
} = selectors;

const connector = connect(
  (state: IStore) => ({
    loggedInUser: LoggedInUserSelector.getId(state),
    postsById: PostSelector.getById(state),
    usersById: UserSelector.getById(state),
    likesById: LikeSelector.getById(state),
    likesAllIds: LikeSelector.getIdArray(state),
  })
);

type TProps = ConnectedProps<typeof connector> & {
  children: (props: { post: any }) => any,
  [key: string]: any,
};

export default connector(function PostContainer({ id: postId, children, ...props }: TProps) {

  const getPost = () => {
    const { id, author, body } = props.postsById[postId];
    const likedBy = selectBy(
      {
        byId: props.likesById,
        allIds: props.likesAllIds
      },
      'user',
      (id: TTableKey) => props.likesById[id].post === postId
    );

    return {
      id,
      author: {
        id: author,
        name: props.usersById[author].name,
        path: `/profile/${author}`
      },
      body,
      likedBy: likedBy.map((id: TTableKey) => ({
        id,
        name: props.usersById[id].name,
        path: `/profile/${id}`
      })),
      liked: likedBy.includes(props.loggedInUser),
      onLike: handleLike
    }
  };

  const handleLike = () => {

    const like = props.likesAllIds.filter(
      (id: TTableKey) =>
        props.likesById[id].user === props.loggedInUser &&
        props.likesById[id].post === postId
    )[0];

    if (like) {
      props.dispatch({ type: DELETE_LIKE, patch: { id: like } });
    } else {
      const id = generateId('like');

      props.dispatch({
        type: ADD_LIKE,
        patch: { id, user: props.loggedInUser, post: postId }
      });
    }
  };

  return children({ post: getPost() })
});