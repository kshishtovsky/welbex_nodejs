const { User } = require('../models/User.model')


export const GetUser = email => {
  const user = await User.findOne()
    .then(() => {
      return user
    })
    .catch(e => {
      return e
    })
}