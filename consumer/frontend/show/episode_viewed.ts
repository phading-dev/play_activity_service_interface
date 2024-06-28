import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
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
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'continueTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
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
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'seasonName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'episode',
      messageType: EPISODE,
    },
    {
      name: 'publisher',
      messageType: PUBLISHER_SUMMARY,
    },
    {
      name: 'lastViewedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
