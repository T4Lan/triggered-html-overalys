module.exports = function (req, res, next) {
  res.sseSetup = function() {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    })
  }

  res.sseSend = function(data) {
    jsonData = JSON.stringify(data);
    res.write("data: " + jsonData + "\n\n");
    console.log("Sending SSE Event with data: " + jsonData);
  }

  next()
}