var Rooms = {
  data: {},
  add: function() {
    let newRoom = prompt('What would you like to call the room?');
    let firstMessage = prompt('What is the first message?');
    App.sendMessage({username: App.username, text: firstMessage, roomname: newRoom});
  }
};