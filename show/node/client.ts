import { ListRecentlyWatchedSeasonsRequestBody, ListRecentlyWatchedSeasonsResponse, LIST_RECENTLY_WATCHED_SEASONS, GetLatestWatchedEpisodeRequestBody, GetLatestWatchedEpisodeResponse, GET_LATEST_WATCHED_EPISODE } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newListRecentlyWatchedSeasonsRequest(
  body: ListRecentlyWatchedSeasonsRequestBody,
): ClientRequestInterface<ListRecentlyWatchedSeasonsResponse> {
  return {
    descriptor: LIST_RECENTLY_WATCHED_SEASONS,
    body,
  };
}

export function newGetLatestWatchedEpisodeRequest(
  body: GetLatestWatchedEpisodeRequestBody,
): ClientRequestInterface<GetLatestWatchedEpisodeResponse> {
  return {
    descriptor: GET_LATEST_WATCHED_EPISODE,
    body,
  };
}
