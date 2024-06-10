import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RECORD_POSTED_COMMENT, RecordPostedCommentRequestBody, RecordPostedCommentResponse } from './interface';

export abstract class RecordPostedCommentHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECORD_POSTED_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: RecordPostedCommentRequestBody,
  ): Promise<RecordPostedCommentResponse>;
}
