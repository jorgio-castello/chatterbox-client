var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    // assign variable call message
    // assign an empty object
    let message = {};
    // message.text equal to event.delegateTarget.elements[0].value
    message.text = event.delegateTarget.elements[0].value;
    // message.username equal to app.username
    message.username = App.username;
    // invoke sendmessage on message
    App.sendMessage(message);
    // invoke updateMessages
    App.updateMessages();
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};