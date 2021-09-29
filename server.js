const express = require('express');
const routes = require('./network/routes.js');
const connect = require('./db.js');
connect().then(r => console.log(r));
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Using express app
app.use('/app', express.static('public'));
/*Starting server*/
routes(app);
//Throwing a server in port 3000
app.listen(3000);

//Send message to console to know server is running
console.log('App running in port 3000');