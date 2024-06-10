import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherViewed {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
/* Timestamp in seconds. */
  viewedTime?: number,
}

export let PUBLISHER_VIEWED: MessageDescriptor<PublisherViewed> = {
  name: 'PublisherViewed',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'viewedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
