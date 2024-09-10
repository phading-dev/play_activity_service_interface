import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeViewed, EPISODE_VIEWED } from './episode_viewed';
import { CommentPosted, COMMENT_POSTED } from './comment_posted';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface ViewEpisodeRequestBody {
  /* If empty, a new id will be created and returned. */
  viewSessionId?: string,
  episodeId?: string,
  /* Timestamp in seconds of the video. */
  episodeTimestamp?: number,
}

export let VIEW_EPISODE_REQUEST_BODY: MessageDescriptor<ViewEpisodeRequestBody> = {
  name: 'ViewEpisodeRequestBody',
  fields: [{
    name: 'viewSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ViewEpisodeResponse {
  viewSessionId?: string,
}

export let VIEW_EPISODE_RESPONSE: MessageDescriptor<ViewEpisodeResponse> = {
  name: 'ViewEpisodeResponse',
  fields: [{
    name: 'viewSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetViewedEpisodesRequestBody {
  lastViewedTimeCursor?: number,
}

export let GET_VIEWED_EPISODES_REQUEST_BODY: MessageDescriptor<GetViewedEpisodesRequestBody> = {
  name: 'GetViewedEpisodesRequestBody',
  fields: [{
    name: 'lastViewedTimeCursor',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetViewedEpisodesResponse {
  episodes?: Array<EpisodeViewed>,
}

export let GET_VIEWED_EPISODES_RESPONSE: MessageDescriptor<GetViewedEpisodesResponse> = {
  name: 'GetViewedEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_VIEWED,
    isArray: true,
  }],
};

export interface GetPostedCommentsRequestBody {
  lastPostedTimeCursor?: number,
}

export let GET_POSTED_COMMENTS_REQUEST_BODY: MessageDescriptor<GetPostedCommentsRequestBody> = {
  name: 'GetPostedCommentsRequestBody',
  fields: [{
    name: 'lastPostedTimeCursor',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetPostedCommentsResponse {
  comments?: Array<CommentPosted>,
}

export let GET_POSTED_COMMENTS_RESPONSE: MessageDescriptor<GetPostedCommentsResponse> = {
  name: 'GetPostedCommentsResponse',
  fields: [{
    name: 'comments',
    index: 1,
    messageType: COMMENT_POSTED,
    isArray: true,
  }],
};

export let VIEW_EPISODE: WebRemoteCallDescriptor = {
  name: "ViewEpisode",
  path: "/ViewEpisode",
  body: {
    messageType: VIEW_EPISODE_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: VIEW_EPISODE_RESPONSE,
  },
}

export let GET_VIEWED_EPISODES: WebRemoteCallDescriptor = {
  name: "GetViewedEpisodes",
  path: "/GetViewedEpisodes",
  body: {
    messageType: GET_VIEWED_EPISODES_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_VIEWED_EPISODES_RESPONSE,
  },
}

export let GET_POSTED_COMMENTS: WebRemoteCallDescriptor = {
  name: "GetPostedComments",
  path: "/GetPostedComments",
  body: {
    messageType: GET_POSTED_COMMENTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_POSTED_COMMENTS_RESPONSE,
  },
}
