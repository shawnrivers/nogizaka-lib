import { fetchGet } from '../utils/fetch';

export const fetchMembers = async (): Promise<any> => {
  const membersResponse = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/members.json',
  );

  return membersResponse;
};
