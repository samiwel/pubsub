const bus = require("servicebus").bus({
  user: "guest",
  password: "guest",
  port: 32810
});

let count = 0;
setInterval(function () {
  bus.send('event.ping', { ping: `${count++}` });
}, 1000);