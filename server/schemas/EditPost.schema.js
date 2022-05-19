export const EditPostSchema_Request = {
  type: 'object',
  properties: {
    post_id: { type: 'integer' },
    new_text: { type: 'string' },
    new_media: {
      type: 'object',
      properties: {
        images: { type: 'array' },
        videos: { type: 'array' },
      },
    },
    user_id: { type: 'integer' },
  },
  required: ['post_id', 'user_id'],
}


export const EditPostSchema_Response = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
    message: { type: 'string' },
  },
  require: ['status', 'message'],
}