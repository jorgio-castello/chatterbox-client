var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //Initialize our RoomView
  },

  fetch: function(callback = ()=>{}, currentRoom) {
    Parse.readAll((data) => {
      debugger;
      // examine the response from the server request:
      Messages.data = data.results;
      //Filter that data for messages that do not have text, and for messages that include script tags
      Messages.filter();
      callback();
      //Initialize message view after initial fetch
      MessagesView.initialize(currentRoom);
      if (currentRoom) {
        currentRoom = currentRoom[0].roomname;
      }
      RoomsView.initialize(currentRoom);
    });
  },
  // sent message
  sendMessage: function(message, successCB, errorCB) {
    // received a message
    // invode Parse.create method in the message
    Parse.create(message, successCB, errorCB);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  updateMessages: function() {
    App.startSpinner();
    let currentSelected = $('#rooms select').find(':selected').text();
    let messages = App.filterMessagesForSelection(currentSelected);
    App.fetch(App.stopSpinner, messages);
  },
  filterMessagesForSelection: function(selection) {
    if (selection === 'Home' || !Messages.data) {
      return undefined;
    }
    return Messages.data.filter(message => message.roomname === selection);
  }
};
