const { SignInRoute } = require('./routes/User.routes')

const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


SignInRoute(app)

app.listen(port, () => {
  console.log(`start listening ${port}`)
})
