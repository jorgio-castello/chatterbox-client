var Messages = {
  data: null,
  filter: function() {
    if (Messages.data !== null) {
      //Filter for text
      Messages.data = Messages.data.filter(message => message.text).filter(message => message.text.indexOf('<script>') === -1).filter(message => message.text.indexOf('<div') === -1);
      //Filter for username
      // Messages.data = Messages.data.filter(message => message.username.indexOf('<script>') === -1).filter(message => message.username.indexOf('<div') === -1);
      // //Filter for roomname
      // Messages.data = Messages.data.filter(message => message.roomname.indexOf('<script>') === -1).filter(message => message.roomname.indexOf('<div') === -1);

    }
  }
};