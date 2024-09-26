import { ViewEpisodeRequestBody, ViewEpisodeResponse, VIEW_EPISODE, GetViewedEpisodesRequestBody, GetViewedEpisodesResponse, GET_VIEWED_EPISODES, GetPostedCommentsRequestBody, GetPostedCommentsResponse, GET_POSTED_COMMENTS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function viewEpisode(
  client: WebClientInterface,
  body: ViewEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<ViewEpisodeResponse> {
  return client.send(
    {
      descriptor: VIEW_EPISODE,
      body,
    },
    options,
  );
}

export function getViewedEpisodes(
  client: WebClientInterface,
  body: GetViewedEpisodesRequestBody,
  options?: WebClientOptions,
): Promise<GetViewedEpisodesResponse> {
  return client.send(
    {
      descriptor: GET_VIEWED_EPISODES,
      body,
    },
    options,
  );
}

export function getPostedComments(
  client: WebClientInterface,
  body: GetPostedCommentsRequestBody,
  options?: WebClientOptions,
): Promise<GetPostedCommentsResponse> {
  return client.send(
    {
      descriptor: GET_POSTED_COMMENTS,
      body,
    },
    options,
  );
}
