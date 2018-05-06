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
    $('#send').submit(function(){
      app.handleSubmit();
      $('.textBox').val('');
    });
    
    
    
    $('#refreshButton').on('click', function(){
      app.fetch()
    });
    
    $( "select" ).change(function() {
      app.chatroomSelected = $( "select option:selected" ).text(); 
      app.fetch();
    });

    
  };
  app.init();
});
app.chatroomSelected = 'Show All';
app.chatrooms = [];

app.roomFilter = function(message){
  
  if(app.chatroomSelected === 'Show All') { 
    
    //$('#chats').append(`<div class=${message.username}>${message.username}: ${message.text}</div>`);
    $('#chats').append(app.addToScreen(message))
  }else if(message.roomname === app.chatroomSelected) {
    //$('#chats').append(`<div class=${message.username}>${message.username}: ${message.text}</div>`);
    $('#chats').append(app.addToScreen(message))
  }
  
};

app.addToScreen = function(message){
  var newDiv = $('<div></div>')
  newDiv.addClass(`${message.username}`);
  newDiv.text(`${message.username} : ${message.text}`)
  return newDiv;
}

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

app.fetch = function() {
  
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: 'order=-createdAt',
    success: function (data) {
      console.log('chatterbox: request successful', data);
      app.clearMessages();
      app.renderMessage(data);
      $('.username').on('click', app.handleUsernameClick());
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

app.roomlistDropdownUpdate = function(message) {
  
  if(!app.chatrooms.includes(message.roomname)){
    app.chatrooms.push(message.roomname);
    $('#roomSelector').append(`<option value=${message.roomname}>${message.roomname}</option>`);
  }
}

app.validateMessage = function(message){
  let charArray = ['&', '<', '>', '"', "'", '`','append', 'prepend', '@', '$', '%', '(', ')', '=', '+', '{', '}', '[', ']'];
  
  // for(let j = 0; j < charArray.length; j++){
    
  //   if(message.username && message.username.includes(charArray[j])){
  //     return false;
  //   } else if (message.text && message.text.includes(charArray[j])){
  //     return false;
  //   } else if (message.roomname && message.roomname.includes(charArray[j])){
  //     return false;
  //   }
      
  // };
  //$('body').css({'background-color': 'red'})
  return true;
}

app.renderMessage = function(fetchedData) {
  //create node, then append the node to #chats
  //add message to array
   
  console.log(fetchedData)
  let messages = fetchedData.results;
  
  console.log(messages)
  for(let i = 0; i < messages.length; i++){
    let message = messages[i];
    
    if(app.validateMessage(message)){
      app.roomlistDropdownUpdate(message);
      app.roomFilter(message);
    }
  }  
  
};

app.renderRoom = function(roomName) {
  //$('#roomSelect').append('<div>' + roomName + '</div>');
  //$('#roomSelector').append('<option value=' + roomName + ">" + roomName + "</option>");
};

app.handleUsernameClick = function() {
  //  alert('sumbitted !!!!!!!!!!!!!')

};

app.handleSubmit = function() {
  event.preventDefault();            
  
  var messageObj = {};
  messageObj.text = $(".textBox").val();
  messageObj.username = 'hi there';
  messageObj.roomname = '6th floor';
  
  app.send(messageObj);
  
  //app.fetch();
 // console.log(app.fetch());

  
//   var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
};


/*
results:
Array(100)
0:Object
createdAt:"2017-12-08T20:55:12.526Z"
objectId:"hEG6XDGsEE"
text:"cat was here"
updatedAt:"2017-12-08T20:55:12.526Z"
username:"cat"
__proto__:
*/






