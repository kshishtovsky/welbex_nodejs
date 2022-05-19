export const SignUpSchema_Request = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['username', 'email', 'password'],
}


export const SignUpSchema_Response = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
    message: { type: 'string' },
  },
  required: ['status', 'message']
}