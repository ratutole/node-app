var socket = io();

$(()=>{
    clickSend();
    getMessages();
});

socket.on('message',addMessage);

function addMessage(message){
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}

function getMessages(){
    $.get('http://localhost:3000/messages', (data)=>{
        data.forEach(addMessage);
    });
}

function postMessage(message){
    $.post('http://localhost:3000/messages', message);
}

function clickSend(){
    $('#send').on('click',()=>{
        var message = {name:$('#name').val(), message:$('#message').val()};
        postMessage(message);
    });
}