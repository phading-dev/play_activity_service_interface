import { RecordPostedCommentRequestBody, RECORD_POSTED_COMMENT, RecordPostedCommentResponse, GetContinueTimestampForEpisodeRequestBody, GET_CONTINUE_TIMESTAMP_FOR_EPISODE, GetContinueTimestampForEpisodeResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecordPostedCommentHandlerInterface implements NodeHandlerInterface {
  public descriptor = RECORD_POSTED_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: RecordPostedCommentRequestBody,
  ): Promise<RecordPostedCommentResponse>;
}

export abstract class GetContinueTimestampForEpisodeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_CONTINUE_TIMESTAMP_FOR_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueTimestampForEpisodeRequestBody,
  ): Promise<GetContinueTimestampForEpisodeResponse>;
}
