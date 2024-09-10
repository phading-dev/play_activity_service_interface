import { RecordPostedCommentRequestBody, RECORD_POSTED_COMMENT, RecordPostedCommentResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecordPostedCommentHandlerInterface implements NodeHandlerInterface {
  public descriptor = RECORD_POSTED_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: RecordPostedCommentRequestBody,
  ): Promise<RecordPostedCommentResponse>;
}
