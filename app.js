const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/post');

//const bodyParser= require('body-parser'); 
const app = express();

//import routes
const  postsRoute = require('./routes/posts')
const authroutes = require('./routes/auth');
require('dotenv/config');


app.get('/', (req, res)=>{
    let lastname = 'Clean Water'
    res.send(`Hello ${lastname}`)
});
//connect to database
mongoose.connect(process.env.DB_CONNECTION,
()=> console.log("Db connected") 
);
//middleware 
app.use(express.json())
//routes middleware
app.use('/user', authroutes)
app.use('/posts', postsRoute);

//listening to server

app.listen(3001, ()=> console.log('server started and running at http://localhost:3001'))

