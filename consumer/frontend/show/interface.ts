import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { EpisodeViewed, EPISODE_VIEWED } from './episode_viewed';
import { CommentPosted, COMMENT_POSTED } from './comment_posted';

export interface ViewEpisodeRequestBody {
/* If empty, a new id will be created and returned. */
  viewSessionId?: string,
  episodeId?: string,
/* Timestamp in seconds of the video. */
  episodeTimestamp?: number,
}

export let VIEW_EPISODE_REQUEST_BODY: MessageDescriptor<ViewEpisodeRequestBody> = {
  name: 'ViewEpisodeRequestBody',
  fields: [
    {
      name: 'viewSessionId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'episodeTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface ViewEpisodeResponse {
  viewSessionId?: string,
}

export let VIEW_EPISODE_RESPONSE: MessageDescriptor<ViewEpisodeResponse> = {
  name: 'ViewEpisodeResponse',
  fields: [
    {
      name: 'viewSessionId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let VIEW_EPISODE: ServiceDescriptor = {
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

export interface GetViewedEpisodesRequestBody {
  lastViewedTimeCursor?: number,
}

export let GET_VIEWED_EPISODES_REQUEST_BODY: MessageDescriptor<GetViewedEpisodesRequestBody> = {
  name: 'GetViewedEpisodesRequestBody',
  fields: [
    {
      name: 'lastViewedTimeCursor',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface GetViewedEpisodesResponse {
  episodes?: Array<EpisodeViewed>,
}

export let GET_VIEWED_EPISODES_RESPONSE: MessageDescriptor<GetViewedEpisodesResponse> = {
  name: 'GetViewedEpisodesResponse',
  fields: [
    {
      name: 'episodes',
      messageType: EPISODE_VIEWED,
      isArray: true,
    },
  ]
};

export let GET_VIEWED_EPISODES: ServiceDescriptor = {
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

export interface GetPostedCommentsRequestBody {
  lastPostedTimeCursor?: number,
}

export let GET_POSTED_COMMENTS_REQUEST_BODY: MessageDescriptor<GetPostedCommentsRequestBody> = {
  name: 'GetPostedCommentsRequestBody',
  fields: [
    {
      name: 'lastPostedTimeCursor',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface GetPostedCommentsResponse {
  comments?: Array<CommentPosted>,
}

export let GET_POSTED_COMMENTS_RESPONSE: MessageDescriptor<GetPostedCommentsResponse> = {
  name: 'GetPostedCommentsResponse',
  fields: [
    {
      name: 'comments',
      messageType: COMMENT_POSTED,
      isArray: true,
    },
  ]
};

export let GET_POSTED_COMMENTS: ServiceDescriptor = {
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
