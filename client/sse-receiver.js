if (!!window.EventSource) {
  var source = new EventSource('http://localhost:1337/suscribe');

  source.addEventListener('message', function(e) {
    if (typeof e.data !== "undefined") {
      var data = JSON.parse(e.data);
      // TODO: Trigger event so that the client can suscribe
    }
  }, false)

  source.addEventListener('open', function(e) {
      console.log("Connected")
      // TODO: Trigger event so that the client can suscribe

  }, false)

  source.addEventListener('error', function(e) {
    if (e.target.readyState == EventSource.CLOSED) {
      console.log("Disconnected")
      // TODO: Trigger event so that the client can suscribe
    }
    else if (e.target.readyState == EventSource.CONNECTING) {
      console.log("Connecting...")
      // TODO: Trigger event so that the client can suscribe
    }
  }, false)
} else {
  console.log("Your browser doesn't support SSE")
}