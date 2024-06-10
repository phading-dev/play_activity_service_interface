import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { SeasonViewed, SEASON_VIEWED } from './season_viewed';
import { PublisherViewed, PUBLISHER_VIEWED } from './publisher_viewed';
import { CommentPosted, COMMENT_POSTED } from './comment_posted';

export interface ViewSeasonRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let VIEW_SEASON_REQUEST_BODY: MessageDescriptor<ViewSeasonRequestBody> = {
  name: 'ViewSeasonRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface ViewSeasonResponse {
}

export let VIEW_SEASON_RESPONSE: MessageDescriptor<ViewSeasonResponse> = {
  name: 'ViewSeasonResponse',
  fields: [
  ]
};

export let VIEW_SEASON: ServiceDescriptor = {
  name: "ViewSeason",
  path: "/ViewSeason",
  body: {
    messageType: VIEW_SEASON_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: VIEW_SEASON_RESPONSE,
  },
}

export interface GetViewedSeasonsRequestBody {
  lastTimeCursor?: number,
}

export let GET_VIEWED_SEASONS_REQUEST_BODY: MessageDescriptor<GetViewedSeasonsRequestBody> = {
  name: 'GetViewedSeasonsRequestBody',
  fields: [
    {
      name: 'lastTimeCursor',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface GetViewedSeasonsResponse {
  seasons?: Array<SeasonViewed>,
}

export let GET_VIEWED_SEASONS_RESPONSE: MessageDescriptor<GetViewedSeasonsResponse> = {
  name: 'GetViewedSeasonsResponse',
  fields: [
    {
      name: 'seasons',
      messageType: SEASON_VIEWED,
      isArray: true,
    },
  ]
};

export let GET_VIEWED_SEASONS: ServiceDescriptor = {
  name: "GetViewedSeasons",
  path: "/GetViewedSeasons",
  body: {
    messageType: GET_VIEWED_SEASONS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_VIEWED_SEASONS_RESPONSE,
  },
}

export interface ViewPublisherRequestBody {
  accountId?: string,
}

export let VIEW_PUBLISHER_REQUEST_BODY: MessageDescriptor<ViewPublisherRequestBody> = {
  name: 'ViewPublisherRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface ViewPublisherResponse {
}

export let VIEW_PUBLISHER_RESPONSE: MessageDescriptor<ViewPublisherResponse> = {
  name: 'ViewPublisherResponse',
  fields: [
  ]
};

export let VIEW_PUBLISHER: ServiceDescriptor = {
  name: "ViewPublisher",
  path: "/ViewPublisher",
  body: {
    messageType: VIEW_PUBLISHER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: VIEW_PUBLISHER_RESPONSE,
  },
}

export interface GetViewedPublishersRequestBody {
  lastTimeCursor?: number,
}

export let GET_VIEWED_PUBLISHERS_REQUEST_BODY: MessageDescriptor<GetViewedPublishersRequestBody> = {
  name: 'GetViewedPublishersRequestBody',
  fields: [
    {
      name: 'lastTimeCursor',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface GetViewedPublishersResponse {
  publishers?: Array<PublisherViewed>,
}

export let GET_VIEWED_PUBLISHERS_RESPONSE: MessageDescriptor<GetViewedPublishersResponse> = {
  name: 'GetViewedPublishersResponse',
  fields: [
    {
      name: 'publishers',
      messageType: PUBLISHER_VIEWED,
      isArray: true,
    },
  ]
};

export let GET_VIEWED_PUBLISHERS: ServiceDescriptor = {
  name: "GetViewedPublishers",
  path: "/GetViewedPublishers",
  body: {
    messageType: GET_VIEWED_PUBLISHERS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_VIEWED_PUBLISHERS_RESPONSE,
  },
}

export interface GetPostedCommentsRequestBody {
  lastTimeCursor?: number,
}

export let GET_POSTED_COMMENTS_REQUEST_BODY: MessageDescriptor<GetPostedCommentsRequestBody> = {
  name: 'GetPostedCommentsRequestBody',
  fields: [
    {
      name: 'lastTimeCursor',
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
