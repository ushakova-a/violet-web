import _ from 'lodash';
import IStore from '../interfases/i-store';

export default function UserSelector() { };

UserSelector.getUsersById = (state: IStore) => state.users.byId;
UserSelector.getUsersIdArray = (state: IStore) => _.keys(state.users.byId);
