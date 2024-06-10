import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface CommentPosted {
  commentId?: string,
  seasonId?: string,
  seasonName?: string,
  episodeId?: string,
  episodeName?: string,
  content?: string,
/* TImestamp in seconds. */
  postedTime?: string,
}

export let COMMENT_POSTED: MessageDescriptor<CommentPosted> = {
  name: 'CommentPosted',
  fields: [
    {
      name: 'commentId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'seasonName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'episodeName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'content',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'postedTime',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
