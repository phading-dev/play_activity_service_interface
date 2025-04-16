import { WatchEpisodeRequestBody, WatchEpisodeResponse, WATCH_EPISODE, ListWatchSessionsRequestBody, ListWatchSessionsResponse, LIST_WATCH_SESSIONS, GetLatestWatchedTimeOfEpisodeRequestBody, GetLatestWatchedTimeOfEpisodeResponse, GET_LATEST_WATCHED_TIME_OF_EPISODE, AddToWatchLaterListRequestBody, AddToWatchLaterListResponse, ADD_TO_WATCH_LATER_LIST, DeleteFromWatchLaterListRequestBody, DeleteFromWatchLaterListResponse, DELETE_FROM_WATCH_LATER_LIST, ListFromWatchLaterListRequestBody, ListFromWatchLaterListResponse, LIST_FROM_WATCH_LATER_LIST } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newWatchEpisodeRequest(
  body: WatchEpisodeRequestBody,
): ClientRequestInterface<WatchEpisodeResponse> {
  return {
    descriptor: WATCH_EPISODE,
    body,
  };
}

export function newListWatchSessionsRequest(
  body: ListWatchSessionsRequestBody,
): ClientRequestInterface<ListWatchSessionsResponse> {
  return {
    descriptor: LIST_WATCH_SESSIONS,
    body,
  };
}

export function newGetLatestWatchedTimeOfEpisodeRequest(
  body: GetLatestWatchedTimeOfEpisodeRequestBody,
): ClientRequestInterface<GetLatestWatchedTimeOfEpisodeResponse> {
  return {
    descriptor: GET_LATEST_WATCHED_TIME_OF_EPISODE,
    body,
  };
}

export function newAddToWatchLaterListRequest(
  body: AddToWatchLaterListRequestBody,
): ClientRequestInterface<AddToWatchLaterListResponse> {
  return {
    descriptor: ADD_TO_WATCH_LATER_LIST,
    body,
  };
}

export function newDeleteFromWatchLaterListRequest(
  body: DeleteFromWatchLaterListRequestBody,
): ClientRequestInterface<DeleteFromWatchLaterListResponse> {
  return {
    descriptor: DELETE_FROM_WATCH_LATER_LIST,
    body,
  };
}

export function newListFromWatchLaterListRequest(
  body: ListFromWatchLaterListRequestBody,
): ClientRequestInterface<ListFromWatchLaterListResponse> {
  return {
    descriptor: LIST_FROM_WATCH_LATER_LIST,
    body,
  };
}
