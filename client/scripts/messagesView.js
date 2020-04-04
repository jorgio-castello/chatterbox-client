var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // 1. create messageContainer variable and store as jquery element
    let messageContainer = $(MessagesView.render());
    // assign the result of invoking messageview.render()

    // 2. loop over our messages
    for (let i = 0; i < Messages.data.length; i++) {
      // messages[0].username = messages[0].username || 'anonymous';
      Messages.data[i].username = Messages.data[i].username || 'Anonymous';
      // message.roomname = message.roomname || 'main room';
      Messages.data[i].roomname = Messages.data[i].roomname || 'Main Room';
      // create a new jquery element
      // assign the return value invoking messageview.render() object
      let jqueryMessage = $(MessageView.render(Messages.data[i]));
      // appendTo our messageContainer to #chats
      messageContainer.append(jqueryMessage);
    }
    MessagesView.$chats.append(messageContainer);
  },

  render: _.template(`
    <div class = "messageContainer"></div>
  `)
};