import { GetContinueEpisodeRequestBody, GetContinueEpisodeResponse, GET_CONTINUE_EPISODE } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetContinueEpisodeRequest(
  body: GetContinueEpisodeRequestBody,
): ClientRequestInterface<GetContinueEpisodeResponse> {
  return {
    descriptor: GET_CONTINUE_EPISODE,
    body,
  };
}
