import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SNAPSHOT: MessageDescriptor<PublisherSnapshot> = {
  name: 'PublisherSnapshot',
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

export interface ContinueEpisode {
  episodeId?: string,
  name?: string,
}

export let CONTINUE_EPISODE: MessageDescriptor<ContinueEpisode> = {
  name: 'ContinueEpisode',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SeasonViewed {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
  continueEpisode?: ContinueEpisode,
  publisher?: PublisherSnapshot,
/* Timestamp in seconds. */
  viewedTime?: number,
}

export let SEASON_VIEWED: MessageDescriptor<SeasonViewed> = {
  name: 'SeasonViewed',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
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
      name: 'continueEpisode',
      messageType: CONTINUE_EPISODE,
    },
    {
      name: 'publisher',
      messageType: PUBLISHER_SNAPSHOT,
    },
    {
      name: 'viewedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
