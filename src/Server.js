const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

app.get('/', (req, res) => {
  res.send('Hello World! hello huy and han')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})