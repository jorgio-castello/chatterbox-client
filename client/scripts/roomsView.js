var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(activeRoom = 'Home') {
    RoomsView.$select.empty();
    RoomsView.$select.append($('<option></option>').attr('value', 'default').text(activeRoom).attr('selected', 'selected'));
    // loop through room's object keys
    for (let key in Rooms.data) {
      // append the keys to the rooms selected
      RoomsView.renderRoom(key);
    }
    RoomsView.$button.on('click', RoomsView.handleAddClick);
  },

  renderRoom: function(key) {
    let optionElement = $('<option></option>').attr('value', key).text(key);
    RoomsView.$select.append(optionElement);
  },
  handleAddClick: function() {
    // decleare a variable and assign the value of currently selected room
    let currentSelected = RoomsView.$select.find(':selected').text();

    // // filter array assign the value of messagesData.filter
    let filterMessages = App.filterMessagesForSelection(currentSelected);
    // // assign the filter message to the value of seleted
    MessagesView.initialize(filterMessages);
  }
};

//When we add a listener to an HTML element, listen for some type of behavior on this element
//Click - listen for when this HTML element is clicked
//When the button is clicked, Do Something