# rabbitmq-demo

***************** INSTALLATION ***************
https://www.rabbitmq.com/download.html

***************** USAGE **********************


1. Run docker desktop
2. docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
3. node send.js or node receive.js to test the message queue.
