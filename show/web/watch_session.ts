import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface WatchSession {
  seasonId?: string,
  episodeId?: string,
  date?: string,
  latestWatchedVideoTimeMs?: number,
}

export let WATCH_SESSION: MessageDescriptor<WatchSession> = {
  name: 'WatchSession',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'date',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'latestWatchedVideoTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
