$(()=>{
    // addMessages({name:"Parth", message:"Hi, there"});
    clickSend();
});

function addMessages(message){
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}

function clickSend(){
    $('#send').on('click',()=>{
        // var name = $('.nme-input').value();
        addMessages({name:$('.nme-input').val(), message: "it works"});
    });
}