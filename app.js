const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//Express specific stuff
app.use('/static' , express.static('static'))
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine' , 'pug') //set the template engine as pug
app.set('views' , path.join(__dirname , 'views')) //set the views directory

//END points
app.get('/' , (req, res)=>{
    const param ={}
    res.status(200).render('index.pug' , param);
})

//start the server

app.listen(port , ()=>{
    console.log(`The application has started successfully on port ${port}`)
});