var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.listen(3000,'localhost',(err)=>{
//     console.log(`Server Started`, err);
// });

app.use(express.static(__dirname));
app.use(bodyParser.json());

var messages = [
    {name:'Tom', message: 'Hi, I am Tim'},
    {name:'Jerry', message: 'Hi, I am Jerry'}
];

app.get('/messages', (req,res)=>{
    res.send(messages);
});

app.post('/messages', (req,res)=>{
    messages.push(req.body);
    res.sendStatus(200);
});

var server = app.listen(3000, ()=>{
    console.log(`server is listening on port`, server.address().port);
});

