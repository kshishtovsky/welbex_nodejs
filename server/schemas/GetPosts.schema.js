export const GetPostsSchema_Request = {
  type: 'object',
  properties: {
    user_id: { type: 'integer' }
  },
  required: ['user_id'],
}


export const GetPostsSchema_Response = {
  elements: {
    type: 'object',
    properties: {
      date: { type: 'timestamp' },
      text: { type: 'string' },
      media: {
        type: 'object',
        properties: {
          images: { type: 'array' },
          videos: { type: 'array' },
        },
        required: ['images', 'videos'],
      },
    },
    required: ['date', 'text', 'media'],
  },
}