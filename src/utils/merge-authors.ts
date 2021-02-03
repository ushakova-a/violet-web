type TAuthorSet = string[];

const mergeAuthors = (keySet: TAuthorSet[]) => keySet.flatMap((type: string[]) => type);

export default mergeAuthors;
