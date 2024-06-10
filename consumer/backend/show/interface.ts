import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';

export interface RecordPostedCommentRequestBody {
  commentId?: string,
}

export let RECORD_POSTED_COMMENT_REQUEST_BODY: MessageDescriptor<RecordPostedCommentRequestBody> = {
  name: 'RecordPostedCommentRequestBody',
  fields: [
    {
      name: 'commentId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RecordPostedCommentResponse {
}

export let RECORD_POSTED_COMMENT_RESPONSE: MessageDescriptor<RecordPostedCommentResponse> = {
  name: 'RecordPostedCommentResponse',
  fields: [
  ]
};

export let RECORD_POSTED_COMMENT: ServiceDescriptor = {
  name: "RecordPostedComment",
  path: "/RecordPostedComment",
  body: {
    messageType: RECORD_POSTED_COMMENT_REQUEST_BODY,
  },
  response: {
    messageType: RECORD_POSTED_COMMENT_RESPONSE,
  },
}
