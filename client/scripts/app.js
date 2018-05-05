// YOUR CODE HERE:
//  http://parse.sfm8.hackreactor.com/chatterbox/classes/messages

var app = {};

app.init = function(){
  //somthing
};

app.send = function(message){
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

app.fetch = function(message){
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

app.clearMessages = function(){
  $('#chats').empty();
};

app.renderMessage = function(message){
  $('#chats').html('<div>' + message.text + '</div>');
}

app.renderRoom = function(roomName){
  $('#roomSelect').append('<div>' + roomName + '</div>');
  $('#roomSelector').append('<option value=' + roomName + ">" + roomName + "</option>")
}







