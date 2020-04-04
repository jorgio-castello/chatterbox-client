var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.empty();
    // 1. loop over our messages
    for (let i = 0; i < Messages.data.length; i++) {
      // messages[0].username = messages[0].username || 'anonymous';
      Messages.data[i].username = Messages.data[i].username || 'Anonymous';
      // message.roomname = message.roomname || 'main room';
      Messages.data[i].roomname = Messages.data[i].roomname || 'Main Room';

      //Build our Rooms object as we push messages to the DOM
      Rooms.data[Messages.data[i].roomname] = true;

      MessagesView.renderMessage(Messages.data[i]);
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