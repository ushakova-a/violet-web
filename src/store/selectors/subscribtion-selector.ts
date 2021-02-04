import IStore from '../interfases/i-store';
import TUserId from '../types/t-user-id';
import SubscribtionMethods from './utils/subscribtion-methods';

export default function SubscribtionSelector() { };

SubscribtionSelector.getLoggedInUserSubscribtionIds =
  (state: IStore): TUserId[] => SubscribtionMethods.getUserSubscribtions(
    state.subscribtions,
    state.loggedInUser
  );

SubscribtionSelector.getLoggedInUserFollowerIds =
  (state: IStore): TUserId[] => SubscribtionMethods.getUserSubscribtions(
    state.subscribtions,
    state.loggedInUser
  );
