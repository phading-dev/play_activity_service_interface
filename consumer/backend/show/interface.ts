import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface RecordPostedCommentRequestBody {
  commentId?: string,
}

export let RECORD_POSTED_COMMENT_REQUEST_BODY: MessageDescriptor<RecordPostedCommentRequestBody> = {
  name: 'RecordPostedCommentRequestBody',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface RecordPostedCommentResponse {
}

export let RECORD_POSTED_COMMENT_RESPONSE: MessageDescriptor<RecordPostedCommentResponse> = {
  name: 'RecordPostedCommentResponse',
  fields: [],
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

export let RECORD_POSTED_COMMENT: NodeRemoteCallDescriptor = {
  name: "RecordPostedComment",
  path: "/RecordPostedComment",
  body: {
    messageType: RECORD_POSTED_COMMENT_REQUEST_BODY,
  },
  response: {
    messageType: RECORD_POSTED_COMMENT_RESPONSE,
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
