const SignInRoute = app => {
  app.get('/signin', (req, res) => {
    res.send(req.body)
  })
}


module.exports = {
  SignInRoute
}