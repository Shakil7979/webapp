var socket;
var maxAttempts = 10;
var attempts = 0;
var retryInterval = 5000; // retry every 5 seconds

function connectSocket() {
  socket = new WebSocket(
    "wss://fwupp82brc.execute-api.us-east-1.amazonaws.com/startClass/?token=VALID_TOKEN&webapp_identifier="+ webappIdentifier
  );

  socket.onopen = function (event) {
    console.log("Connected to WebSocket.");
    attempts = 0; // reset attempts on successful connection
  };

  socket.onmessage = function (event) {
    let data = JSON.parse(event.data);
    if (data.class_id) {
      startWatching(data.class_id);
    } else if (data.message) {
      console.log(data.message);
    }
  };

  socket.onerror = function (error) {
    console.log("WebSocket Error: " + error);
  };

  socket.onclose = function (event) {
    console.log("WebSocket connection closed: " + event.code);
    if (attempts < maxAttempts) {
      attempts += 1;
      setTimeout(connectSocket, retryInterval);
      console.log(
        `Attempt ${attempts} to reconnect in ${retryInterval / 1000} seconds.`
      );
    }
  };
}

connectSocket();

function startWatching(class_id) {
  let url = startWatchingURL;
  url = url.replace("PLACEHOLDER", class_id);
  window.location.href = url;
}
