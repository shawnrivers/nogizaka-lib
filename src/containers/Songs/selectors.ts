import { IRootState } from '../../stores/state';
import { ISongs, ISong, IMemberCard, ISongDisplay, IFormationsDisplay } from '../../models/ISong';
import { FetchStatus, SongType, PositionType, FukujinType } from '../../utils/constants';
import { convertInCd, convertSongType } from '../../utils/strings';
import { selectMemberByName } from '../Members/selectors';

const selectSongs = (state: IRootState): ISongs => state.songs.data;

export const selectSongsFetchStatus = (state: IRootState): FetchStatus => state.songs.fetchStatus;

export const selectSongByKey = (state: IRootState, key: string): ISong => selectSongs(state)[key];

const calculatePositionTag = (song: ISong, memberName: string): PositionType => {
  if (song.performers.center.includes(memberName)) {
    return PositionType.Center;
  }

  if (song.type === SongType.Title) {
    if (song.performers.fukujin === FukujinType.RowOne) {
      if (song.formations.firstRow.includes(memberName)) {
        return PositionType.Fukujin;
      }
    } else if (song.performers.fukujin === FukujinType.RowOneTwo) {
      if (song.formations.firstRow.includes(memberName) || song.formations.secondRow.includes(memberName)) {
        return PositionType.Fukujin;
      }
    } else {
      if (song.performers.fukujin.includes(memberName)) {
        return PositionType.Fukujin;
      }
    }
  }
  return PositionType.None;
};

const convertFormationsForDisplay = (song: ISong, state: IRootState): IFormationsDisplay => {
  const formationArray = [
    song.formations.firstRow,
    song.formations.secondRow,
    song.formations.thirdRow,
    song.formations.fourthRow,
  ].filter(formation => formation.length > 0);

  let convertedFormations: IMemberCard[][] = [];

  for (let i = 0; i < formationArray.length; i++) {
    convertedFormations.push([]);
    const formation = formationArray[i];

    for (const name of formation) {
      const member = selectMemberByName(state, name);
      const convertedFormation =
        name !== 'kojimaharuna'
          ? member !== undefined
            ? {
                name,
                displayName: member.nameNotations.lastName + ' ' + member.nameNotations.firstName,
                profileImage:
                  song.performersTag.singleNumber !== ''
                    ? member.singleImages[song.performersTag.singleNumber]
                    : member.profileImage,
                position: calculatePositionTag(song, member.name),
              }
            : {
                name,
                displayName: '',
                profileImage: {
                  large: '',
                  small: '',
                },
                position: calculatePositionTag(song, member),
              }
          : {
              name: 'kojimaharuna',
              displayName: '小嶋 陽菜',
              profileImage: {
                large:
                  'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_large.jpg',
                small:
                  'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_small.jpg',
              },
              position: PositionType.Center,
            };
      convertedFormations[i].push(convertedFormation);
    }
  }

  return convertedFormations;
};

const convertPerformersTagForDisplay = (performersTag: { name: string; singleNumber: string }): string => {
  switch (performersTag.name) {
    case 'first generation':
      return '1期生';
    case 'second generation':
      return '2期生';
    case 'third generation':
      return '3期生';
    case 'fourth generation':
      return '4期生';
    case 'selected':
      return convertInCd(performersTag.singleNumber) + 'Single 選抜';
    case 'under':
      return convertInCd(performersTag.singleNumber) + 'Single Under';
    default:
      return performersTag.name;
  }
};

export const SelectSongByKeyForDisplay = (state: IRootState, key: string): ISongDisplay | undefined => {
  const song = selectSongByKey(state, key);

  if (song !== undefined) {
    return {
      title: song.title,
      key: song.key,
      single: {
        title: song.single.title,
        number: convertInCd(song.single.number),
      },
      albums: song.albums.map(album => ({ title: album.title, number: convertInCd(album.number) })),
      artwork: song.artwork,
      musicVideo: song.musicVideo,
      type: convertSongType(song.type),
      creators: song.creators,
      formations: convertFormationsForDisplay(song, state),
      performersTag: convertPerformersTagForDisplay(song.performersTag),
    };
  }

  return undefined;
};
