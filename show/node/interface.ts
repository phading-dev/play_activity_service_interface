import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { WatchedSeason, WATCHED_SEASON } from './watched_season';
import { PLAY_ACTIVITY_NODE_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ListRecentlyWatchedSeasonsRequestBody {
  watcherId?: string,
  limit?: number,
}

export let LIST_RECENTLY_WATCHED_SEASONS_REQUEST_BODY: MessageDescriptor<ListRecentlyWatchedSeasonsRequestBody> = {
  name: 'ListRecentlyWatchedSeasonsRequestBody',
  fields: [{
    name: 'watcherId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListRecentlyWatchedSeasonsResponse {
  seasons?: Array<WatchedSeason>,
}

export let LIST_RECENTLY_WATCHED_SEASONS_RESPONSE: MessageDescriptor<ListRecentlyWatchedSeasonsResponse> = {
  name: 'ListRecentlyWatchedSeasonsResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: WATCHED_SEASON,
    isArray: true,
  }],
};

export interface GetLatestWatchedEpisodeRequestBody {
  seasonId?: string,
  watcherId?: string,
}

export let GET_LATEST_WATCHED_EPISODE_REQUEST_BODY: MessageDescriptor<GetLatestWatchedEpisodeRequestBody> = {
  name: 'GetLatestWatchedEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watcherId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetLatestWatchedEpisodeResponse {
  episodeId?: string,
  watchedVideoTimeMs?: number,
}

export let GET_LATEST_WATCHED_EPISODE_RESPONSE: MessageDescriptor<GetLatestWatchedEpisodeResponse> = {
  name: 'GetLatestWatchedEpisodeResponse',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchedVideoTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let LIST_RECENTLY_WATCHED_SEASONS: RemoteCallDescriptor = {
  name: "ListRecentlyWatchedSeasons",
  service: PLAY_ACTIVITY_NODE_SERVICE,
  path: "/s/ListRecentlyWatchedSeasons",
  body: {
    messageType: LIST_RECENTLY_WATCHED_SEASONS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_RECENTLY_WATCHED_SEASONS_RESPONSE,
  },
}

export let GET_LATEST_WATCHED_EPISODE: RemoteCallDescriptor = {
  name: "GetLatestWatchedEpisode",
  service: PLAY_ACTIVITY_NODE_SERVICE,
  path: "/s/GetLatestWatchedEpisode",
  body: {
    messageType: GET_LATEST_WATCHED_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: GET_LATEST_WATCHED_EPISODE_RESPONSE,
  },
}
