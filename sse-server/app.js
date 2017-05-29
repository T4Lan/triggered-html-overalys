var express = require('express')
  , app = express()
  , sse = require('./sse')

var connections = []

app.use(sse)

app.get('/send', function(req, res) {
//  if (req.query.yes === "true") votes.yes++
//  else votes.no++

  for(var i = 0; i < connections.length; i++) {
    connections[i].sseSend({})
  }

  res.sendStatus(200)
})

app.get('/suscribe', function(req, res) {
  res.sseSetup()
  res.sseSend()
  connections.push(res)
})

app.listen(1337, function() {
  console.log('Listening on port 1337...')
})