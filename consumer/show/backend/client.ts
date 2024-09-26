import { SyncPostedCommentRequestBody, SyncPostedCommentResponse, SYNC_POSTED_COMMENT, GetContinueEpisodeRequestBody, GetContinueEpisodeResponse, GET_CONTINUE_EPISODE, GetContinueTimestampForEpisodeRequestBody, GetContinueTimestampForEpisodeResponse, GET_CONTINUE_TIMESTAMP_FOR_EPISODE } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function syncPostedComment(
  client: NodeClientInterface,
  body: SyncPostedCommentRequestBody,
  options?: NodeClientOptions,
): Promise<SyncPostedCommentResponse> {
  return client.send(
    {
      descriptor: SYNC_POSTED_COMMENT,
      body,
    },
    options,
  );
}

export function getContinueEpisode(
  client: NodeClientInterface,
  body: GetContinueEpisodeRequestBody,
  options?: NodeClientOptions,
): Promise<GetContinueEpisodeResponse> {
  return client.send(
    {
      descriptor: GET_CONTINUE_EPISODE,
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
