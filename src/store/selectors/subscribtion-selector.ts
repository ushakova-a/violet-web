import _ from 'lodash';
import IStore from '../interfases/i-store';
import TUserId from '../types/t-user-id';
import selectBy from './utils/select-by';

export default function SubscribtionSelector() { };


SubscribtionSelector.getById = (state: IStore) => state.subscribtions.byId;
SubscribtionSelector.getIdArray = (state: IStore) => _.keys(state.subscribtions.byId);

SubscribtionSelector.getLoggedInUserSubscribtionIds =
  (state: IStore): TUserId[] => selectBy(
    state.subscribtions,
    'subscribtion',
    (id: string) => state.subscribtions.byId[id].subscriber === state.loggedInUser
  );

SubscribtionSelector.getLoggedInUserFollowerIds =
  (state: IStore): TUserId[] => selectBy(
    state.subscribtions,
    'subscriber',
    (id: string) => state.subscribtions.byId[id].subscribtion === state.loggedInUser
  );
