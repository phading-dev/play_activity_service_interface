import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface Episode {
  episodeId?: string,
  name?: string,
  /* Timestamp in seconds of the video. */
  continueTimestamp?: number,
  /* In seconds */
  length?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'length',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface EpisodeViewed {
  seasonId?: string,
  seasonName?: string,
  coverImagePath?: string,
  /* Small number means low quality and price. */
  grade?: number,
  episode?: Episode,
  publisher?: PublisherSummary,
  /* Timestamp in seconds. */
  lastViewedTime?: number,
}

export let EPISODE_VIEWED: MessageDescriptor<EpisodeViewed> = {
  name: 'EpisodeViewed',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImagePath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'episode',
    index: 5,
    messageType: EPISODE,
  }, {
    name: 'publisher',
    index: 6,
    messageType: PUBLISHER_SUMMARY,
  }, {
    name: 'lastViewedTime',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
