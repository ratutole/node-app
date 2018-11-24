var express = require('express');
var app = express();

// app.listen(3000,'localhost',(err)=>{
//     console.log(`Server Started`, err);
// });

app.use(express.static(__dirname));
var server = app.listen(3000, ()=>{
    console.log(`server is listening on port`, server.address().port);
});

