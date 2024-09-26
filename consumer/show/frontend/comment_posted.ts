import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface CommentPosted {
  commentId?: string,
  seasonId?: string,
  seasonName?: string,
  episodeId?: string,
  episodeName?: string,
  content?: string,
  postedTimestamps?: number,
}

export let COMMENT_POSTED: MessageDescriptor<CommentPosted> = {
  name: 'CommentPosted',
  fields: [{
    name: 'commentId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeName',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'content',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'postedTimestamps',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
