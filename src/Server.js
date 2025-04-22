const express = require('express')
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
require('dotenv').config()

const port = process.env.PORT || 3000

configViewEngine(app)
app.use('/', webRoute)
app.use('/abc', webRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})