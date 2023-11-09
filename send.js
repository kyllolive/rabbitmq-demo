const amqp = require("amqplib/callback_api");

const ampCallback = (error0, connection) => {
  if (error0) {
    throw error0;
  }

  connection.createChannel((error1, channel) => {
    const queue = "Queue";
    const msg = "Hi Kyle1";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(`[x] Sent ${msg}`);
  });
};

amqp.connect("amqp://localhost", ampCallback);
