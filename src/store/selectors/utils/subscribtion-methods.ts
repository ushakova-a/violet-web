import IStoreTableSubscribtions from "../../interfases/i-store-table-subscribtions";
import TUserId from "../../types/t-user-id";

export default function SubscribtionMethods() { };

SubscribtionMethods.getUserSubscribtions = ({ byId, allIds }: IStoreTableSubscribtions, user: TUserId): TUserId[] => {
  const filteredIds = allIds.filter((id: string) => byId[id].subscriber === user);

  return filteredIds.map((id: string) => byId[id].subscribtion)
};

SubscribtionMethods.getUserFollowers = ({ byId, allIds }: IStoreTableSubscribtions, user: TUserId): TUserId[] => {
  const filteredIds = allIds.filter((id: string) => byId[id].subscribtion === user);

  return filteredIds.map((id: string) => byId[id].subscriber)
};
