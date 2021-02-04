import IStore from '../interfases/i-store';

export default function LoggedInUserSelector() { };

LoggedInUserSelector.getId = (state: IStore) => state.loggedInUser;
