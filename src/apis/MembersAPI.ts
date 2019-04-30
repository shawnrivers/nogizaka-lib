import { fetchGet } from '../utils/fetch';
import { MemberResponse } from './responseTypes';
import { IMember } from '../models/IMember';

const convertMemberResponse = (memberResponse: MemberResponse): IMember => ({
  name: memberResponse.name,
  nameNotations: memberResponse.nameNotations,
  glowStickColor: memberResponse.glowStickColor,
  profileImage: memberResponse.profileImage,
  singleImages: memberResponse.singleImages,
  join: memberResponse.join,
  birthday: memberResponse.birthday,
  height: memberResponse.height,
  bloodType: memberResponse.bloodType,
  sites: memberResponse.sites,
  photoAlbums: memberResponse.photoAlbums,
  units: memberResponse.units,
  positionsHistory: memberResponse.positionsHistory,
  positionsCounter: memberResponse.positionsCounter,
  isGraduated: memberResponse.graduation.isGraduated,
  graduatedDate: memberResponse.graduation.graduatedDate,
});

export const fetchMembers = async (): Promise<IMember[]> => {
  const membersResponse: MemberResponse[] = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/members.json',
  );

  const convertedMembers = membersResponse.map(memberResponse => convertMemberResponse(memberResponse));

  return convertedMembers;
};
