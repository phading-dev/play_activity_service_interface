import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RecordPostedCommentRequestBody, RecordPostedCommentResponse, RECORD_POSTED_COMMENT } from './interface';

export function recordPostedComment(
  client: WebServiceClientInterface,
  body: RecordPostedCommentRequestBody,
): Promise<RecordPostedCommentResponse> {
  return client.send({
    descriptor: RECORD_POSTED_COMMENT,
    body,
  });
}
