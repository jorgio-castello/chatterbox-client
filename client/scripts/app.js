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
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.data = data.results;
      //Filter that data for messages that do not have text, and for messages that include script tags
      Messages.data = Messages.data.filter(message => message.text).filter(message => message.text.indexOf('<script>') === -1).filter(message => message.text.indexOf('<div') === -1);
      callback();
      //Initialize message view after initial fetch
      MessagesView.initialize();
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
  }
};
