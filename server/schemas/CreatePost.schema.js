export const CreatePostSchema_Request = {
  type: 'object',
  properties: {
    text: { type: 'string' },
    media: {
      type: 'object',
      properties: {
        images: { type: 'array' },
        videos: { type: 'array' },
      },
    },
    user_id: { type: 'integer' },
  },
  required: ['user_id'],
}


export const CreatePostSchema_Response = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
    message: { type: 'string' },
  },
  required: ['status', 'message'],
}