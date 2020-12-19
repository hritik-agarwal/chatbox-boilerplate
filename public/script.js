const socket = io();
const usersList = document.querySelector(".users-name"); 
const messageForm = document.getElementById("message-form"); 
const messageInput = document.querySelector("#msg");
const messages = document.querySelector(".messages");

// getting username from index.html, here qs is a library to parse querystring in url 
const {username} = Qs.parse(location.search, {ignoreQueryPrefix: true});

// 1. send username about "userJoin" to server 

// 2. listen for "updateUsers" from server , take users in input of callback & inside callback implement
  // 1. set usersList inner html content to empty string
  // 2. loop through users & for each user create a li element with innerHTML = `${users[i].username}` & append it in usersList


// 3. listen for "message" from server , take msg in input of callback & inside callback implement
  // 1. create a new div element with innerHTML = ` <p class="meta">${msg.username}</p> <p class="text">${msg.message}</p> `
  // 2. add class "message" to div
  // 3. append this div in messages

// 4. Create an even listener attached to messageForm for event 'submit' & in callback implement
  // 1. prevent the defualt for submission behaviour
  // 2. send {username: username, message: messageInput.value } about messageMessage to server 
  // 3. set messageInput value to empty string