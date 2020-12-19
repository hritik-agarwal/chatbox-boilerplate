## Let's Build a Real Time Chat Application

This app is built using socket.io js module which enable real-time, bidirectional communication between server and client(s).

### Features 

1. A place where many users can join and talk to each other in real time. 
2. When a user join only he is shown a welcome message.
3. When a user join/leave other users in room are notified of him joining/leaving.

### Main Files in boilerplate 

1. index.html -> Homepage where user enters his name and join the chat room
2. chatbox.html -> containing a users list(showing current users), message panel(here all messages are shown), message box(to type messages) and a leave button
3. style.css -> required styling - no need to change
4. script.js -> Here all the client side logic will be written
5. server.js -> Here all the server side logic will be written

You only have to edit scirpt.js & server.js

## Steps to build the app

* Step1 : run 'npm install' to install required libraries
* Step2 : confirm you have express & socket.io installed in package.json
* Step3 : Read about socket.io below
* Step4 : Implement the steps mentioned in script.js & server.js


## Socket.io usage in server & clien side

### Setting up the io to listen to new connections
1. io.on("connection", (socket) => {})      => listen to a new socket connection. Here socket in callback represents new client. Every other logic is written inside it.

### Listening to data from client

1. socket.on("something", (data) => {})     => listen to some data send from client about something
2. socket.on("disconnect", () => {})        => when client leaves

### Sending data to client(s)
2. io.emit("something", data)               => send any data about something to every socket 
3. socket.emit("something", data)           => send any data about something to current socket only 
4. socket.broadcast.emit("something", data) => send any data about something to everyone except current socket 

## Different methods used in client side

## Listening to data from client
1. socket.on("something", (data) => {})     => listen to some data about something send from server

### Sending data to client(s)
3. socket.emit("something", data)           => send any data about something to server 

### Example : 
1. "something" will be 'message' for sending/reciving messages, 'usersJoin' to handle new users joining, "updateUsers" to update users list
2. data is in object form {username : 'username', message : 'message'}

### To test your app

Step1 : run 'node server' in terminal
STep2 : Open atleast 2 tabs & goto localhost:3000 & enter in all of them with different user names to check if app works correctly