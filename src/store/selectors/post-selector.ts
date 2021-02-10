import _ from 'lodash';
import IStore from '../interfases/i-store';

export default function PostSelector() { };

PostSelector.getById = (state: IStore) => state.posts.byId;
PostSelector.getIdArray = (state: IStore) => _.keys(state.posts.byId);
