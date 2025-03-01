import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeWatched, EPISODE_WATCHED } from './episode_watched';
import { PLAY_ACTIVITY_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface WatchEpisodeRequestBody {
  watchSessionId?: string,
  seasonId?: string,
  episodeId?: string,
  watchTimeMs?: number,
}

export let WATCH_EPISODE_REQUEST_BODY: MessageDescriptor<WatchEpisodeRequestBody> = {
  name: 'WatchEpisodeRequestBody',
  fields: [{
    name: 'watchSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watchTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface WatchEpisodeResponse {
  watchSessionId?: string,
}

export let WATCH_EPISODE_RESPONSE: MessageDescriptor<WatchEpisodeResponse> = {
  name: 'WatchEpisodeResponse',
  fields: [{
    name: 'watchSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListWatchedEpisodesRequestBody {
  limit?: number,
  lastWatchedTimeCursor?: number,
}

export let LIST_WATCHED_EPISODES_REQUEST_BODY: MessageDescriptor<ListWatchedEpisodesRequestBody> = {
  name: 'ListWatchedEpisodesRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastWatchedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListWatchedEpisodesResponse {
  episodes?: Array<EpisodeWatched>,
  lastWatchedTimeCursor?: number,
}

export let LIST_WATCHED_EPISODES_RESPONSE: MessageDescriptor<ListWatchedEpisodesResponse> = {
  name: 'ListWatchedEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_WATCHED,
    isArray: true,
  }, {
    name: 'lastWatchedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetContinueEpisodeRequestBody {
  seasonId?: string,
}

export let GET_CONTINUE_EPISODE_REQUEST_BODY: MessageDescriptor<GetContinueEpisodeRequestBody> = {
  name: 'GetContinueEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetContinueEpisodeResponse {
  episodeId?: string,
  continueTimeMs?: number,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetContinueTimeForEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_CONTINUE_TIME_FOR_EPISODE_REQUEST_BODY: MessageDescriptor<GetContinueTimeForEpisodeRequestBody> = {
  name: 'GetContinueTimeForEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetContinueTimeForEpisodeResponse {
  continueTimeMs?: number,
}

export let GET_CONTINUE_TIME_FOR_EPISODE_RESPONSE: MessageDescriptor<GetContinueTimeForEpisodeResponse> = {
  name: 'GetContinueTimeForEpisodeResponse',
  fields: [{
    name: 'continueTimeMs',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface AddToWatchLaterListRequestBody {
  seasonId?: string,
}

export let ADD_TO_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<AddToWatchLaterListRequestBody> = {
  name: 'AddToWatchLaterListRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AddToWatchLaterListResponse {
}

export let ADD_TO_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<AddToWatchLaterListResponse> = {
  name: 'AddToWatchLaterListResponse',
  fields: [],
};

export interface DeleteFromWatchLaterListRequestBody {
  seasonId?: string,
}

export let DELETE_FROM_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<DeleteFromWatchLaterListRequestBody> = {
  name: 'DeleteFromWatchLaterListRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteFromWatchLaterListResponse {
}

export let DELETE_FROM_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<DeleteFromWatchLaterListResponse> = {
  name: 'DeleteFromWatchLaterListResponse',
  fields: [],
};

export interface ListFromWatchLaterListRequestBody {
  limit?: number,
  addedTimeCursor?: number,
}

export let LIST_FROM_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<ListFromWatchLaterListRequestBody> = {
  name: 'ListFromWatchLaterListRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'addedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListFromWatchLaterListResponse {
  seasonIds?: Array<string>,
  addedTimeCursor?: number,
}

export let LIST_FROM_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<ListFromWatchLaterListResponse> = {
  name: 'ListFromWatchLaterListResponse',
  fields: [{
    name: 'seasonIds',
    index: 1,
    primitiveType: PrimitiveType.STRING,
    isArray: true,
  }, {
    name: 'addedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let WATCH_EPISODE: RemoteCallDescriptor = {
  name: "WatchEpisode",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/WatchEpisode",
  body: {
    messageType: WATCH_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: WATCH_EPISODE_RESPONSE,
  },
}

export let LIST_WATCHED_EPISODES: RemoteCallDescriptor = {
  name: "ListWatchedEpisodes",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/ListWatchedEpisodes",
  body: {
    messageType: LIST_WATCHED_EPISODES_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_WATCHED_EPISODES_RESPONSE,
  },
}

export let GET_CONTINUE_EPISODE: RemoteCallDescriptor = {
  name: "GetContinueEpisode",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/GetContinueEpisode",
  body: {
    messageType: GET_CONTINUE_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_CONTINUE_EPISODE_RESPONSE,
  },
}

export let GET_CONTINUE_TIME_FOR_EPISODE: RemoteCallDescriptor = {
  name: "GetContinueTimeForEpisode",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/GetContinueTimeForEpisode",
  body: {
    messageType: GET_CONTINUE_TIME_FOR_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_CONTINUE_TIME_FOR_EPISODE_RESPONSE,
  },
}

export let ADD_TO_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "AddToWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/AddToWatchLaterList",
  body: {
    messageType: ADD_TO_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: ADD_TO_WATCH_LATER_LIST_RESPONSE,
  },
}

export let DELETE_FROM_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "DeleteFromWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/DeleteFromWatchLaterList",
  body: {
    messageType: DELETE_FROM_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_FROM_WATCH_LATER_LIST_RESPONSE,
  },
}

export let LIST_FROM_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "ListFromWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/ListFromWatchLaterList",
  body: {
    messageType: LIST_FROM_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_FROM_WATCH_LATER_LIST_RESPONSE,
  },
}
