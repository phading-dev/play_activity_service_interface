import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { VIEW_EPISODE, ViewEpisodeRequestBody, ViewEpisodeResponse, GET_VIEWED_EPISODES, GetViewedEpisodesRequestBody, GetViewedEpisodesResponse, GET_POSTED_COMMENTS, GetPostedCommentsRequestBody, GetPostedCommentsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class ViewEpisodeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VIEW_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: ViewEpisodeRequestBody,
    auth: ClientSession,
  ): Promise<ViewEpisodeResponse>;
}

export abstract class GetViewedEpisodesHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_VIEWED_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: GetViewedEpisodesRequestBody,
    auth: ClientSession,
  ): Promise<GetViewedEpisodesResponse>;
}

export abstract class GetPostedCommentsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_POSTED_COMMENTS;
  public abstract handle(
    loggingPrefix: string,
    body: GetPostedCommentsRequestBody,
    auth: ClientSession,
  ): Promise<GetPostedCommentsResponse>;
}
