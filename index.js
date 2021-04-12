const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('New Message', (msg) => {
        console.log(msg);
    });

    socket.on('disconnect', () => {
        console.log('The use has gone');
    });
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });