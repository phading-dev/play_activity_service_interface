import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface MeterReading {
  seasonId?: string,
/* In second. */
  watchStart?: number,
/* In second. */
  watchEnd?: number,
/* Seconds between reading start and end. */
  watchTime?: number,
/* Timestamp in second. */
  startTimestamp?: number,
/* Timestamp in second. */
  endTimestamp?: number,
}

export let METER_READING: MessageDescriptor<MeterReading> = {
  name: 'MeterReading',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'watchStart',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'watchEnd',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'watchTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'startTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'endTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
