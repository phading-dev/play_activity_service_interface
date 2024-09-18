import { RecordPostedCommentRequestBody, RecordPostedCommentResponse, RECORD_POSTED_COMMENT, GetContinueTimestampForEpisodeRequestBody, GetContinueTimestampForEpisodeResponse, GET_CONTINUE_TIMESTAMP_FOR_EPISODE } from './interface';
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

export function getContinueTimestampForEpisode(
  client: NodeClientInterface,
  body: GetContinueTimestampForEpisodeRequestBody,
  options?: NodeClientOptions,
): Promise<GetContinueTimestampForEpisodeResponse> {
  return client.send(
    {
      descriptor: GET_CONTINUE_TIMESTAMP_FOR_EPISODE,
      body,
    },
    options,
  );
}
