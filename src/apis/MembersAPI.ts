import { fetchGet } from '../utils/fetch';
import { MemberResponse } from './responseTypes';
import { IMember } from '../models/IMember';

const convertMemberResponse = (memberResponse: MemberResponse): IMember => {
  const {
    name,
    nameNotations,
    profileImage,
    singleImages,
    join,
    birthday,
    height,
    bloodType,
    sites,
    photoAlbums,
    units,
    positionsHistory,
    positionsCounter,
    graduation,
  } = memberResponse;

  return {
    name,
    nameNotations,
    profileImage,
    singleImages,
    join,
    birthday,
    height,
    bloodType,
    sites,
    photoAlbums,
    units,
    positionsHistory,
    positionsCounter,
    graduation,
  };
};

export const fetchMembers = async (): Promise<IMember[]> => {
  const membersResponse: MemberResponse[] = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/members.json',
  );

  const convertedMembers = membersResponse.map(memberResponse => convertMemberResponse(memberResponse));

  return convertedMembers;
};
