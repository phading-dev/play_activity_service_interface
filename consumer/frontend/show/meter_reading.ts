import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface MeterReading {
  seasonId?: string,
/* Granularity is second. */
  watchTime?: number,
}

export let METER_READING: MessageDescriptor<MeterReading> = {
  name: 'MeterReading',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'watchTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
