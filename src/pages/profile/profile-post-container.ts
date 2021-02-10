import { connect, ConnectedProps } from 'react-redux';
import IStore from '../../store/interfases/i-store';
import selectors from '../../store/selectors';
import TTableKey from '../../store/types/t-table-key';
import { ADD_POST } from '../../store/keys';
import generateId from '../../utils/generate-id';

const {
  LoggedInUserSelector,
  UserSelector,
  PostSelector,
} = selectors;

const connector = connect(
  (state: IStore) => ({
    loggedInUser: LoggedInUserSelector.getId(state),
    postsById: PostSelector.getById(state),
    postsAllIds: PostSelector.getIdArray(state),
    usersById: UserSelector.getById(state),
  })
);

type TProps = ConnectedProps<typeof connector> & {
  children: (tabProps: any) => any,
  [key: string]: any,
};

export default connector(function ProfilePostContainer({ id: userId, children, ...props }: TProps) {

  if (!props.usersById[userId]) return children({ posts: null });

  const createUserPosts = () => ({
    id: userId,
    postIds: props.postsAllIds.filter(
      (id: TTableKey) => props.postsById[id].author === userId)
  });

  const createPost = (body: string) => {

    const id = generateId('post');

    props.dispatch({
      type: ADD_POST,
      patch: { id, author: props.loggedInUser, body }
    });
  };

  return children({ posts: createUserPosts(), createPost })
});
