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
    
    //$('#send .submit').on('submit', app.handleSubmit());
    $('#send').submit(app.handleSubmit);
    
    $('.username').on('click', app.handleUsernameClick());
    
    // $('.asdf').on('click','.shawndrost', function(){
    //   showUserTimeline('shawndrost');
    // })
    
  };
  app.init();
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
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    success: function (data) {
      console.log('chatterbox: request successful', data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive data', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  //create node, then append the node to #chats
  //add message to array
  //event.preventDefault();
  $('#chats').append('<div class='+ message.username + '>' + message.username + ': ' + message.text + '</div>');
   
  //need to include username and add class to use for selector
  //append to <div>
  //app.fetch();
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');
  $('#roomSelector').append('<option value=' + roomName + ">" + roomName + "</option>");
};

app.handleUsernameClick = function() {
  //  alert('sumbitted !!!!!!!!!!!!!')

};

app.handleSubmit = function() {
  event.preventDefault();            
  
  var messageObj = {};
  messageObj.text = $(".textBox").val();
  messageObj.username = 'crzyROBOT'
  messageObj.roomname = 'newROOM'
  
  //app.send(messageObj);
  
  app.renderMessage(messageObj)
  console.log(app.fetch(messageObj))

  
//   var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
};







