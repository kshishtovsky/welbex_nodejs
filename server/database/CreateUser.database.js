const { User } = require('../models/User.model')


export const CreateUser = (login, email, password) => {
  const user = await User.create({
    login: login, email: email, password: password
  })
    .then(() => {
      return { 'status': 'success' }
    })
    .catch(e => {
      return e
    })
}