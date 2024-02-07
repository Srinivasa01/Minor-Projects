var express = require('express')
var connection = require('./connection.js')
var router = express.Router()

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM details ORDER BY Name desc', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('elderly', { data: '' })
    } else {
      res.render('elderly', { data: rows })
    }
  })
})
module.exports = router