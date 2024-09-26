import { SyncPostedCommentRequestBody, SYNC_POSTED_COMMENT, SyncPostedCommentResponse, GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse, GetContinueTimestampForEpisodeRequestBody, GET_CONTINUE_TIMESTAMP_FOR_EPISODE, GetContinueTimestampForEpisodeResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class SyncPostedCommentHandlerInterface implements NodeHandlerInterface {
  public descriptor = SYNC_POSTED_COMMENT;
  public abstract handle(
    loggingPrefix: string,
    body: SyncPostedCommentRequestBody,
  ): Promise<SyncPostedCommentResponse>;
}

export abstract class GetContinueEpisodeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_CONTINUE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueEpisodeRequestBody,
  ): Promise<GetContinueEpisodeResponse>;
}

export abstract class GetContinueTimestampForEpisodeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_CONTINUE_TIMESTAMP_FOR_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueTimestampForEpisodeRequestBody,
  ): Promise<GetContinueTimestampForEpisodeResponse>;
}
