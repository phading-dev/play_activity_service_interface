import { WatchEpisodeRequestBody, WatchEpisodeResponse, WATCH_EPISODE, ListWatchedEpisodesRequestBody, ListWatchedEpisodesResponse, LIST_WATCHED_EPISODES, GetContinueEpisodeRequestBody, GetContinueEpisodeResponse, GET_CONTINUE_EPISODE, GetContinueTimeForEpisodeRequestBody, GetContinueTimeForEpisodeResponse, GET_CONTINUE_TIME_FOR_EPISODE, AddToWatchLaterListRequestBody, AddToWatchLaterListResponse, ADD_TO_WATCH_LATER_LIST, DELETE_FROM_WATCH_LATER_LIST, ListFromWatchLaterListRequestBody, ListFromWatchLaterListResponse, LIST_FROM_WATCH_LATER_LIST } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newWatchEpisodeRequest(
  body: WatchEpisodeRequestBody,
): ClientRequestInterface<WatchEpisodeResponse> {
  return {
    descriptor: WATCH_EPISODE,
    body,
  };
}

export function newListWatchedEpisodesRequest(
  body: ListWatchedEpisodesRequestBody,
): ClientRequestInterface<ListWatchedEpisodesResponse> {
  return {
    descriptor: LIST_WATCHED_EPISODES,
    body,
  };
}

export function newGetContinueEpisodeRequest(
  body: GetContinueEpisodeRequestBody,
): ClientRequestInterface<GetContinueEpisodeResponse> {
  return {
    descriptor: GET_CONTINUE_EPISODE,
    body,
  };
}

export function newGetContinueTimeForEpisodeRequest(
  body: GetContinueTimeForEpisodeRequestBody,
): ClientRequestInterface<GetContinueTimeForEpisodeResponse> {
  return {
    descriptor: GET_CONTINUE_TIME_FOR_EPISODE,
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
  body: AddToWatchLaterListRequestBody,
): ClientRequestInterface<AddToWatchLaterListResponse> {
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
