const express= require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app= express();
app.use(express.static(path.join(__dirname,'./client')));
app.use('/scripts', express.static(path.join(__dirname,'./node_modules')));
app.use(bodyParser.json());


app.listen(8000,function(){
	console.log('app running at 8000');
});