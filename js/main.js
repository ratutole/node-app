$(()=>{
    // addMessages({name:"Parth", message:"Hi, there"});
    clickSend();
    getMessages();
});

function addMessages(message){
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}

function getMessages(){
    $.get('http://localhost:3000/messages', (data)=>{
        data.forEach(addMessages);
    });
}

function clickSend(){
    $('#send').on('click',()=>{
        // var name = $('.nme-input').value();
        addMessages({name:$('.nme-input').val(), message: "it works"});
    });
}