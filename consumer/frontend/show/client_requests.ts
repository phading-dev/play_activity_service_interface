import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SyncMeterReadingRequestBody, SyncMeterReadingResponse, SYNC_METER_READING, ViewSeasonRequestBody, ViewSeasonResponse, VIEW_SEASON, GetViewedSeasonsRequestBody, GetViewedSeasonsResponse, GET_VIEWED_SEASONS, ViewPublisherRequestBody, ViewPublisherResponse, VIEW_PUBLISHER, GetViewedPublishersRequestBody, GetViewedPublishersResponse, GET_VIEWED_PUBLISHERS } from './interface';

export function syncMeterReading(
  client: WebServiceClientInterface,
  body: SyncMeterReadingRequestBody,
): Promise<SyncMeterReadingResponse> {
  return client.send({
    descriptor: SYNC_METER_READING,
    body,
  });
}

export function viewSeason(
  client: WebServiceClientInterface,
  body: ViewSeasonRequestBody,
): Promise<ViewSeasonResponse> {
  return client.send({
    descriptor: VIEW_SEASON,
    body,
  });
}

export function getViewedSeasons(
  client: WebServiceClientInterface,
  body: GetViewedSeasonsRequestBody,
): Promise<GetViewedSeasonsResponse> {
  return client.send({
    descriptor: GET_VIEWED_SEASONS,
    body,
  });
}

export function viewPublisher(
  client: WebServiceClientInterface,
  body: ViewPublisherRequestBody,
): Promise<ViewPublisherResponse> {
  return client.send({
    descriptor: VIEW_PUBLISHER,
    body,
  });
}

export function getViewedPublishers(
  client: WebServiceClientInterface,
  body: GetViewedPublishersRequestBody,
): Promise<GetViewedPublishersResponse> {
  return client.send({
    descriptor: GET_VIEWED_PUBLISHERS,
    body,
  });
}
