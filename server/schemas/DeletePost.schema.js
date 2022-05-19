export const DeletePostSchema_Request = {
  type: 'object',
  properties: {
    post_id: { type: 'integer' },
    user_id: { type: 'integer' },
  },
  required: ['post_id', 'user_id'],
}


export const DeletePostSchema_Response = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
    message: { type: 'string' },
  },
  required: ['status', 'message'],
}