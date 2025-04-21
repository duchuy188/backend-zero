const express = require('express')
const app = express()
const port = 3001

app.get('/abc', (req, res) => {
  res.send('Check abc')
})

app.get('/', (req, res) => {
  res.send('Hello World! hello huy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})