var express=require('express')
   ,bodyParser=require('body-parser');

//set System enviorment variables
var port=process.env.PORT || 3000;

//define route for clinetpages
var index =require('./routes/index');
//route for Apicalls

var tasks= require('./routes/tasks');
//create app
var app=express();

//View Engine
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(__dirname + '/client'));
//app.use(express.bodyParser());
app.use('/', index);
app.use('/api', tasks);


app.listen(port,function(){
  console.log('server started on'+port );
});
