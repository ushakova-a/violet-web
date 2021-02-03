import ISubscribtion from "../../store/interfases/i-subscribtion";
import TUserId from "../../store/types/t-user-id";

export default class Subscribtions {

  static getUserSubscribtionKeys(
    subscribtions: {
      byId: { [key: string]: ISubscribtion },
      allIds: string[]
    },
    user: TUserId
  ): TUserId[] {

    const subscribtionsArray = subscribtions.allIds.map((id: string) => subscribtions.byId[id]);
    const subscribtionsFiltered = subscribtionsArray.filter(
      ({ following: [subscriber] }: any) => subscriber === user);

    return subscribtionsFiltered.map(([subscribtion]: any) => subscribtion)
  };

  static getUserFollowerKeys(
    subscribtions: {
      byId: { [key: string]: ISubscribtion },
      allIds: string[]
    },
    user: TUserId
  ): TUserId[] {

    const subscribtionsArray = subscribtions.allIds.map((id: string) => subscribtions.byId[id]);
    const subscribtionsFiltered = subscribtionsArray.filter(
      ({ following: [subscribtion] }: any) => subscribtion === user)

    return subscribtionsFiltered.map(([subscriber]: any) => subscriber)
  };
};
