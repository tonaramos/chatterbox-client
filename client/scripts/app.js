// YOUR CODE HERE:
//  http://parse.sfm8.hackreactor.com/chatterbox/classes/messages

var app = {};
$(document).ready(function() {
  app.init = function() {
  //somthing
  
    //use this with document.ready
    // $('#send .submit').on('submit', function(){
    //   app.handleSubmit();
    // })
    
    //".click"
    
    $('#send .submit').on('submit', app.handleSubmit);
    $('.username').on('click', app.handleUsernameClick());
    
    // $('.asdf').on('click','.shawndrost', function(){
    //   showUserTimeline('shawndrost');
    // })
    
  };
});

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}; 

app.fetch = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    //url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  //create node, then append the node to #chats
  //add message to array
  $('#chats').html('<div class='+ message.username + '>' + message.text + '</div>');
  //need to include username and add class to use for selector
  //append to <div>
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');
  $('#roomSelector').append('<option value=' + roomName + ">" + roomName + "</option>");
};

app.handleUsernameClick = function() {
  
};

app.handleSubmit = function() {
  
};







