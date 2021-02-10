import _ from "lodash";
import IStoreTable from "../../interfases/i-store-table";
import TTableKey from "../../types/t-table-key";

const selectBy = (
  { byId }: IStoreTable,
  fieldName: string,
  idsFilter: (id: string) => boolean
): string[] => {

  const allIds = _.keys(byId);
  const filteredIds = allIds.filter(idsFilter);

  return filteredIds.map((id: TTableKey) => byId[id][fieldName])
};

export default selectBy;
