import { ViewEpisodeRequestBody, VIEW_EPISODE, ViewEpisodeResponse, GetViewedEpisodesRequestBody, GET_VIEWED_EPISODES, GetViewedEpisodesResponse, GetPostedCommentsRequestBody, GET_POSTED_COMMENTS, GetPostedCommentsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class ViewEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = VIEW_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: ViewEpisodeRequestBody,
    auth: ClientSession,
  ): Promise<ViewEpisodeResponse>;
}

export abstract class GetViewedEpisodesHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_VIEWED_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: GetViewedEpisodesRequestBody,
    auth: ClientSession,
  ): Promise<GetViewedEpisodesResponse>;
}

export abstract class GetPostedCommentsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_POSTED_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: GetPostedCommentsRequestBody,
    auth: ClientSession,
  ): Promise<GetPostedCommentsResponse>;
}
