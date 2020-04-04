var MessageView = {

  //Check if all the data exists - for example with username, if it doesn't exist
  //We want to include anonymous
  //If roomname doesn't exist, we want to call it like "Main Room"

  render: _.template(`
  <div class="chat">
    <div class="username">
      <%= username %>
    </div>

    <div class = "messageText">
      <%= text %>
    </div>

    <div class = "roomname">
      <%= roomname %>
    </div>
  </div>
        `)
};

