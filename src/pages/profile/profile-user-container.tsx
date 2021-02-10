import { connect, ConnectedProps } from 'react-redux';
import IStore from '../../store/interfases/i-store';
import selectors from '../../store/selectors';
import TTableKey from '../../store/types/t-table-key';
import selectBy from '../../store/selectors/utils/select-by';
import generateId from '../../utils/generate-id';
import { ADD_SUBSCRIBTION, DELETE_SUBSCRIBTION, UPDATE_USER } from '../../store/keys';

const {
  LoggedInUserSelector,
  UserSelector,
  SubscribtionSelector
} = selectors;

const connector = connect(
  (state: IStore) => ({
    loggedInUser: LoggedInUserSelector.getId(state),
    usersById: UserSelector.getById(state),
    subscribtionsById: SubscribtionSelector.getById(state),
    subscribtionsAllIds: SubscribtionSelector.getIdArray(state)
  })
);

type TProps = ConnectedProps<typeof connector> & {
  children: (props: { profile: any }) => any,
  [key: string]: any,
};

export default connector(function ProfileUserContainer({ id: userId, children, ...props }: TProps) {

  console.log(props.usersById)
  console.log(userId)

  if (!props.usersById[userId]) return children({ profile: null });

  const getProfileHeader = () => {
    const { name } = props.usersById[userId];
    const subscribtions = selectBy(
      { byId: props.subscribtionsById },
      'subscribtion',
      (id: string) => props.subscribtionsById[id].subscriber === userId
    );
    const subscribers = selectBy(
      { byId: props.subscribtionsById },
      'subscriber',
      (id: string) => props.subscribtionsById[id].subscribtion === userId
    );

    return {
      id: userId,
      name,
      path: `/profile/${userId}`,
      subscribtionCount: subscribtions.length,
      subscriberCount: subscribers.length,
      onChangeUserName: userId === props.loggedInUser ? handleChangeUser : null,
      subscribed: subscribers.includes(props.loggedInUser),
      onSubscribe: userId !== props.loggedInUser ? handleSubscribe : null,
    }
  };

  const handleChangeUser = (value: string) => {

    props.dispatch({
      type: UPDATE_USER,
      patch: { id: props.loggedInUser, name: value }
    });
  };

  const handleSubscribe = () => {

    const subscribtionId = props.subscribtionsAllIds.filter(
      (id: TTableKey) =>
        props.subscribtionsById[id].subscriber === props.loggedInUser &&
        props.subscribtionsById[id].subscribtion === userId
    )[0];

    if (subscribtionId) {
      props.dispatch({ type: DELETE_SUBSCRIBTION, patch: { id: subscribtionId } });

    } else {
      const id = generateId('subscribtion');

      props.dispatch({
        type: ADD_SUBSCRIBTION,
        patch: { id, subscriber: props.loggedInUser, subscribtion: userId }
      });
    }
  };


  return children({ profile: getProfileHeader() })
});
