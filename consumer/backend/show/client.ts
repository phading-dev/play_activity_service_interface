import { RecordPostedCommentRequestBody, RecordPostedCommentResponse, RECORD_POSTED_COMMENT } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function recordPostedComment(
  client: NodeClientInterface,
  body: RecordPostedCommentRequestBody,
  options?: NodeClientOptions,
): Promise<RecordPostedCommentResponse> {
  return client.send(
    {
      descriptor: RECORD_POSTED_COMMENT,
      body,
    },
    options,
  );
}
