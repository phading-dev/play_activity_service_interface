import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PLAY_ACTIVITY_NODE_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetContinueEpisodeRequestBody {
  seasonId?: string,
  watcherId?: string,
}

export let GET_CONTINUE_EPISODE_REQUEST_BODY: MessageDescriptor<GetContinueEpisodeRequestBody> = {
  name: 'GetContinueEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'watcherId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetContinueEpisodeResponse {
  episodeId?: string,
  continueTimeMs?: number,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_CONTINUE_EPISODE: RemoteCallDescriptor = {
  name: "GetContinueEpisode",
  service: PLAY_ACTIVITY_NODE_SERVICE,
  path: "/GetContinueEpisode",
  body: {
    messageType: GET_CONTINUE_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: GET_CONTINUE_EPISODE_RESPONSE,
  },
}
