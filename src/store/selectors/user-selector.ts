import _ from 'lodash';
import IStore from '../interfases/i-store';

export default function UserSelector() { };

UserSelector.getById = (state: IStore) => state.users.byId;
UserSelector.getIdArray = (state: IStore) => _.keys(state.users.byId);
