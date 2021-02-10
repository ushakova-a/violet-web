import { connect, ConnectedProps } from 'react-redux';
import TUserId from '../../store/types/t-user-id';
import IStore from '../../store/interfases/i-store';
import selectors from '../../store/selectors';
import TTableKey from '../../store/types/t-table-key';

const {
  LoggedInUserSelector,
  UserSelector,
  PostSelector,
  SubscribtionSelector,
  LikeSelector
} = selectors;

const connector = connect(
  (state: IStore) => ({
    loggedInUser: LoggedInUserSelector.getId(state),
    postsById: PostSelector.getById(state),
    postsAllIds: PostSelector.getIdArray(state),
    usersById: UserSelector.getById(state),
    loggedInUserSubscribtions: SubscribtionSelector.getLoggedInUserSubscribtionIds(state),
    likesById: LikeSelector.getById(state)
  })
);

type TProps = ConnectedProps<typeof connector> & {
  children: (tabProps: any) => any,
  [key: string]: any,
};

export default connector(function FeedPostContainer({ children, ...props }: TProps) {

  const createTabs = () => {
    const authorIds: { [key: string]: TUserId[] } = {
      subscribtions: props.loggedInUserSubscribtions,
      own: [props.loggedInUser]
    };
    const filteringKeys = (showPosts: string[]) => showPosts.flatMap((type: string) => authorIds[type]);
    const getFilteredPostIds = (showPosts: string[]) =>
      props.postsAllIds.filter(
        (id: TTableKey) => filteringKeys(showPosts)?.includes(props.postsById[id].author)
      );

    return [
      {
        id: 'all',
        title: 'Все посты',
        postsAllIds: props.postsAllIds
      },
      {
        id: 'subscribtions',
        title: 'Подписки',
        postsAllIds: getFilteredPostIds(['subscribtions', 'own'])
      }
    ];
  };

  return children({ values: createTabs() })
});
