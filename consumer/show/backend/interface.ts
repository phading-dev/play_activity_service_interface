import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface SyncPostedCommentRequestBody {
  commentId?: string,
}

export let SYNC_POSTED_COMMENT_REQUEST_BODY: MessageDescriptor<SyncPostedCommentRequestBody> = {
  name: 'SyncPostedCommentRequestBody',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SyncPostedCommentResponse {
}

export let SYNC_POSTED_COMMENT_RESPONSE: MessageDescriptor<SyncPostedCommentResponse> = {
  name: 'SyncPostedCommentResponse',
  fields: [],
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
  continueTimestamp?: number,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimestamp',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetContinueTimestampForEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_CONTINUE_TIMESTAMP_FOR_EPISODE_REQUEST_BODY: MessageDescriptor<GetContinueTimestampForEpisodeRequestBody> = {
  name: 'GetContinueTimestampForEpisodeRequestBody',
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

export interface GetContinueTimestampForEpisodeResponse {
  continueTimestamp?: number,
}

export let GET_CONTINUE_TIMESTAMP_FOR_EPISODE_RESPONSE: MessageDescriptor<GetContinueTimestampForEpisodeResponse> = {
  name: 'GetContinueTimestampForEpisodeResponse',
  fields: [{
    name: 'continueTimestamp',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let SYNC_POSTED_COMMENT: NodeRemoteCallDescriptor = {
  name: "SyncPostedComment",
  path: "/SyncPostedComment",
  body: {
    messageType: SYNC_POSTED_COMMENT_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_POSTED_COMMENT_RESPONSE,
  },
}

export let GET_CONTINUE_EPISODE: NodeRemoteCallDescriptor = {
  name: "GetContinueEpisode",
  path: "/GetContinueEpisode",
  body: {
    messageType: GET_CONTINUE_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: GET_CONTINUE_EPISODE_RESPONSE,
  },
}

export let GET_CONTINUE_TIMESTAMP_FOR_EPISODE: NodeRemoteCallDescriptor = {
  name: "GetContinueTimestampForEpisode",
  path: "/GetContinueTimestampForEpisode",
  body: {
    messageType: GET_CONTINUE_TIMESTAMP_FOR_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: GET_CONTINUE_TIMESTAMP_FOR_EPISODE_RESPONSE,
  },
}
