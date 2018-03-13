let express = require('express');// this is unique to node modules, don't need ./

// run server! // localhoast:a number is the port on your computer
//make the application
//run express function and it returns something to app
let app = express();

const PORT = 5000;


//express lets us slow stuff down 
//need to tell server what to send
//control c turns off the server
//server our files
app.use(express.static('server/public'));

app.listen(PORT, ()=>{
    console.log('app is running on port 50000');
});