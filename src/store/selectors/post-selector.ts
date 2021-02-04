import _ from 'lodash';
import IStore from '../interfases/i-store';

export default function PostSelector() { };

PostSelector.getPostsById = (state: IStore) => state.posts.byId;
PostSelector.getPostsIdArray = (state: IStore) => _.keys(state.posts.byId);
