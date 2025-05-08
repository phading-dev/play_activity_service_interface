import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface WatchSession {
  seasonId?: string,
  episodeId?: string,
  latestWatchedVideoTimeMs?: number,
  createdTimeMs?: number,
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
    name: 'latestWatchedVideoTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
