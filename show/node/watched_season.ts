import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface WatchedSeason {
  seasonId?: string,
  latestEpisodeId?: string,
  latestEpisodeIndex?: number,
  latestWatchedTimeMs?: number,
}

export let WATCHED_SEASON: MessageDescriptor<WatchedSeason> = {
  name: 'WatchedSeason',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'latestEpisodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'latestEpisodeIndex',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'latestWatchedTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
