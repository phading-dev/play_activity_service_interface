import { WatchEpisodeRequestBody, WATCH_EPISODE, WatchEpisodeResponse, ListWatchedEpisodesRequestBody, LIST_WATCHED_EPISODES, ListWatchedEpisodesResponse, GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse, GetContinueTimeForEpisodeRequestBody, GET_CONTINUE_TIME_FOR_EPISODE, GetContinueTimeForEpisodeResponse, AddToWatchLaterListRequestBody, ADD_TO_WATCH_LATER_LIST, AddToWatchLaterListResponse, DeleteFromWatchLaterListRequestBody, DELETE_FROM_WATCH_LATER_LIST, DeleteFromWatchLaterListResponse, ListFromWatchLaterListRequestBody, LIST_FROM_WATCH_LATER_LIST, ListFromWatchLaterListResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class WatchEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = WATCH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: WatchEpisodeRequestBody,
    authStr: string,
  ): Promise<WatchEpisodeResponse>;
}

export abstract class ListWatchedEpisodesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_WATCHED_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListWatchedEpisodesRequestBody,
    authStr: string,
  ): Promise<ListWatchedEpisodesResponse>;
}

export abstract class GetContinueEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONTINUE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueEpisodeRequestBody,
    authStr: string,
  ): Promise<GetContinueEpisodeResponse>;
}

export abstract class GetContinueTimeForEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONTINUE_TIME_FOR_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueTimeForEpisodeRequestBody,
    authStr: string,
  ): Promise<GetContinueTimeForEpisodeResponse>;
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
