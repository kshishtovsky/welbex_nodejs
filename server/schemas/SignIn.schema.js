export const SignInSchema_Request = {
  type: 'object',
  properties: {
    login: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['login', 'password'],
}


export const SignInSchema_Response = {
  type: 'object',
  properties: {
    status: { type: 'boolean' },
    message: { type: 'string' },
  },
  required: ['status', 'message'],
}