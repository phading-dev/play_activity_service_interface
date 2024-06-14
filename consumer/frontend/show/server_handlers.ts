import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SYNC_METER_READING, SyncMeterReadingRequestBody, SyncMeterReadingResponse, VIEW_SEASON, ViewSeasonRequestBody, ViewSeasonResponse, GET_VIEWED_SEASONS, GetViewedSeasonsRequestBody, GetViewedSeasonsResponse, VIEW_PUBLISHER, ViewPublisherRequestBody, ViewPublisherResponse, GET_VIEWED_PUBLISHERS, GetViewedPublishersRequestBody, GetViewedPublishersResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class SyncMeterReadingHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SYNC_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: SyncMeterReadingRequestBody,
    auth: ClientSession,
  ): Promise<SyncMeterReadingResponse>;
}

export abstract class ViewSeasonHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VIEW_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ViewSeasonRequestBody,
    auth: ClientSession,
  ): Promise<ViewSeasonResponse>;
}

export abstract class GetViewedSeasonsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_VIEWED_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: GetViewedSeasonsRequestBody,
    auth: ClientSession,
  ): Promise<GetViewedSeasonsResponse>;
}

export abstract class ViewPublisherHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VIEW_PUBLISHER;
  public abstract handle(
    loggingPrefix: string,
    body: ViewPublisherRequestBody,
    auth: ClientSession,
  ): Promise<ViewPublisherResponse>;
}

export abstract class GetViewedPublishersHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_VIEWED_PUBLISHERS;
  public abstract handle(
    loggingPrefix: string,
    body: GetViewedPublishersRequestBody,
    auth: ClientSession,
  ): Promise<GetViewedPublishersResponse>;
}
