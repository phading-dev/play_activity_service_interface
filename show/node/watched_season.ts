import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface WatchedSeason {
  seasonId?: string,
  latestEpisodeId?: string,
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
    name: 'latestWatchedTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
