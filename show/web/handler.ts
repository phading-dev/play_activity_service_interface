import { WatchEpisodeRequestBody, WATCH_EPISODE, WatchEpisodeResponse, ListWatchSessionsRequestBody, LIST_WATCH_SESSIONS, ListWatchSessionsResponse, GetLatestWatchedTimeOfEpisodeRequestBody, GET_LATEST_WATCHED_TIME_OF_EPISODE, GetLatestWatchedTimeOfEpisodeResponse, AddToWatchLaterListRequestBody, ADD_TO_WATCH_LATER_LIST, AddToWatchLaterListResponse, DeleteFromWatchLaterListRequestBody, DELETE_FROM_WATCH_LATER_LIST, DeleteFromWatchLaterListResponse, ListFromWatchLaterListRequestBody, LIST_FROM_WATCH_LATER_LIST, ListFromWatchLaterListResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class WatchEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = WATCH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: WatchEpisodeRequestBody,
    authStr: string,
  ): Promise<WatchEpisodeResponse>;
}

export abstract class ListWatchSessionsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_WATCH_SESSIONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListWatchSessionsRequestBody,
    authStr: string,
  ): Promise<ListWatchSessionsResponse>;
}

export abstract class GetLatestWatchedTimeOfEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_LATEST_WATCHED_TIME_OF_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetLatestWatchedTimeOfEpisodeRequestBody,
    authStr: string,
  ): Promise<GetLatestWatchedTimeOfEpisodeResponse>;
}

export abstract class AddToWatchLaterListHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = ADD_TO_WATCH_LATER_LIST;
  public abstract handle(
    loggingPrefix: string,
    body: AddToWatchLaterListRequestBody,
    authStr: string,
  ): Promise<AddToWatchLaterListResponse>;
}

export abstract class DeleteFromWatchLaterListHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_FROM_WATCH_LATER_LIST;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteFromWatchLaterListRequestBody,
    authStr: string,
  ): Promise<DeleteFromWatchLaterListResponse>;
}

export abstract class ListFromWatchLaterListHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_FROM_WATCH_LATER_LIST;
  public abstract handle(
    loggingPrefix: string,
    body: ListFromWatchLaterListRequestBody,
    authStr: string,
  ): Promise<ListFromWatchLaterListResponse>;
}
