var MessagesView = {

  $chats: $('#chats'),

  initialize: function(messages = Messages.data) {
    MessagesView.$chats.empty();
    // 1. loop over our messages
    for (let i = 0; i < messages.length; i++) {
      // messages[0].username = messages[0].username || 'anonymous';
      messages[i].username = messages[i].username || 'Anonymous';
      // message.roomname = message.roomname || 'main room';
      messages[i].roomname = messages[i].roomname || 'Main Room';

      //Build our Rooms object as we push messages to the DOM
      Rooms.data[Messages.data[i].roomname] = true;

      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    // create a new jquery element
    // assign the return value invoking messageview.render() object
    let jqueryMessage = $(MessageView.render(message));
    // appendTo our messageContainer to #chats
    MessagesView.$chats.append(jqueryMessage);
  }
};