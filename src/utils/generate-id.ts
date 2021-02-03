export default function generateId(prefix: string): string {
  return prefix + (+(new Date)).toString(16)
};
