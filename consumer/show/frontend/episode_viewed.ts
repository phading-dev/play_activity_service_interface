import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallUrl?: string,
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
    name: 'avatarSmallUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface Episode {
  episodeId?: string,
  continueTimestamp?: number,
  videoLength?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
  fields: [{
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoLength',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface EpisodeViewed {
  seasonId?: string,
  seasonName?: string,
  coverImageUrl?: string,
  grade?: number,
  episode?: Episode,
  publisher?: PublisherSummary,
  lastViewedTimestamp?: number,
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
    name: 'coverImageUrl',
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
    name: 'lastViewedTimestamp',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
