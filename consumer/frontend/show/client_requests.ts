import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { ViewEpisodeRequestBody, ViewEpisodeResponse, VIEW_EPISODE, GetViewedEpisodesRequestBody, GetViewedEpisodesResponse, GET_VIEWED_EPISODES, GetPostedCommentsRequestBody, GetPostedCommentsResponse, GET_POSTED_COMMENTS } from './interface';

export function viewEpisode(
  client: WebServiceClientInterface,
  body: ViewEpisodeRequestBody,
): Promise<ViewEpisodeResponse> {
  return client.send({
    descriptor: VIEW_EPISODE,
    body,
  });
}

export function getViewedEpisodes(
  client: WebServiceClientInterface,
  body: GetViewedEpisodesRequestBody,
): Promise<GetViewedEpisodesResponse> {
  return client.send({
    descriptor: GET_VIEWED_EPISODES,
    body,
  });
}

export function getPostedComments(
  client: WebServiceClientInterface,
  body: GetPostedCommentsRequestBody,
): Promise<GetPostedCommentsResponse> {
  return client.send({
    descriptor: GET_POSTED_COMMENTS,
    body,
  });
}
