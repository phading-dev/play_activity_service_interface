import { GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetContinueEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONTINUE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueEpisodeRequestBody,
  ): Promise<GetContinueEpisodeResponse>;
}
