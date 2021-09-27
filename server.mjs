import express from 'express';
import routes from "./network/routes.mjs";

//Create a route, giving a response-> Deprecated
// app.use('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });

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