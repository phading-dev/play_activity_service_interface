import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface EpisodeWatched {
  seasonId?: string,
  episodeId?: string,
  continueTimeMs?: number,
  lastWatchedTimeMs?: number,
}

export let EPISODE_WATCHED: MessageDescriptor<EpisodeWatched> = {
  name: 'EpisodeWatched',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastWatchedTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
