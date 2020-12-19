// importing required modules
const express = require('express');
const http = require('http');
const socketio = require("socket.io");
const path = require('path');

// creating an express instance, then an http server, which is then passed to socketio
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// This will contain all the users
const users = [];

// telling expres app to run our static html, css & js files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// 1. setup io to listen to new connection , take "socket" as input in callback & then inside its callback implement

  // 1. send {username:"Bot", message:"Welcome to chatbox"} about "message" to current socket only

  // 2. listen for "userJoin" from client , take input "username" in callback & then inside its callback implement
    // 1. push {id: socket.id, username: username} in users array
    // 2. send {username:"Bot",message:`${username} has joined the chat`} about "message" to everyone except current socket 
    // 3. send users array about "updateUsers" to every socket

  // 3. listen for "disconnect" from client & then inside its callback implement
    // 1. find index in users array where id == socket.id and find its username
    // 2. send {username:"Bot",message:`${username} has left the chat`} about "message" to everyone except current socket
    // 3. remove that user from users array
    // 4. send users array about "updateUsers" to every socket

  // 4. listen for "chatMessage" from client , take msg as input in callback & then inside its callback implement

  // 5. send {username:msg.username,message:msg.message} about "message" to every socket

server.listen(process.env.PORT || 3000);