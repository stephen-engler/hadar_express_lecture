let express = require('express');// this is unique to node modules, don't need ./

// run server! // localhoast:a number is the port on your computer
//make the application
//run express function and it returns something to app
let app = express();

//express lets us slow stuff down 
//need to tell server what to send
//control c turns off the server
app.listen(5000, function(){
    console.log('app is running on port 50000');
});