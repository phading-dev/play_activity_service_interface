import { ListRecentlyWatchedSeasonsRequestBody, LIST_RECENTLY_WATCHED_SEASONS, ListRecentlyWatchedSeasonsResponse, GetLatestWatchedEpisodeRequestBody, GET_LATEST_WATCHED_EPISODE, GetLatestWatchedEpisodeResponse, GetLatestWatchedTimeOfEpisodeRequestBody, GET_LATEST_WATCHED_TIME_OF_EPISODE, GetLatestWatchedTimeOfEpisodeResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class ListRecentlyWatchedSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_RECENTLY_WATCHED_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListRecentlyWatchedSeasonsRequestBody,
  ): Promise<ListRecentlyWatchedSeasonsResponse>;
}

export abstract class GetLatestWatchedEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_LATEST_WATCHED_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetLatestWatchedEpisodeRequestBody,
  ): Promise<GetLatestWatchedEpisodeResponse>;
}

export abstract class GetLatestWatchedTimeOfEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_LATEST_WATCHED_TIME_OF_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetLatestWatchedTimeOfEpisodeRequestBody,
  ): Promise<GetLatestWatchedTimeOfEpisodeResponse>;
}
