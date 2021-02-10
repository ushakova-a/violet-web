import _ from 'lodash';
import IStore from '../interfases/i-store';

export default function LikeSelector() { };

LikeSelector.getById = (state: IStore) => state.likes.byId;
LikeSelector.getIdArray = (state: IStore) => _.keys(state.likes.byId);
