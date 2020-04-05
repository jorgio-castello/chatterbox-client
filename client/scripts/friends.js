var Friends = {
  data: {},
  toggleStatus: function(e) {
    let friend = e.delegateTarget.innerText;
    Friends.data[friend] = true;
    let chatsChildren = $('#chats').children();
    for (let i = 0; i < chatsChildren.length; i++) {
      let message = $(chatsChildren[i]);
      let username = message.find('div.username').text();
      username = username.trim();

      if (username === friend) {
        message.addClass('friend');
      }
    }
  }
};