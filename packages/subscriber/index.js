const bus = require("servicebus").bus({
  user: "guest",
  password: "guest",
  port: 32810
});

bus.listen('event.ping', event => {
  console.log(event);
});

