import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface WatchLaterSeason {
  seasonId?: string,
  continueEpisodeId?: string,
  continueTimeMs?: number,
  addedTimeMs?: number,
}

export let WATCH_LATER_SEASON: MessageDescriptor<WatchLaterSeason> = {
  name: 'WatchLaterSeason',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueEpisodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'addedTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
