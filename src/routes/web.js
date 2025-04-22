const express = require('express')
const router = express.Router()

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
  })
  
  router.get('/', (req, res) => {
    res.send('Hello World! hello huy and han')
  })

  module.exports = router;