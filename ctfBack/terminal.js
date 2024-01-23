const express = require('express');
const http = require('http');
const { Server } = require('socket.io')
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = new Server();

app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(express.static('public'));
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('command', (command) => {
    executeCommand(command, (output) => {
      // Send the output back to the client
      socket.emit('output', output);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

function executeCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      callback(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
    }
    console.log(`Command output: ${stdout}`);
    callback(stdout);
  });
}

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
