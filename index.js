var express = require  ('express') ;
var  app = express () ;
var path = require ('path') ;
var PORT = process.env.PORT || 3000
var phones = require  ('./json/phone') ;
var humans = require  ('./json/human') ;
var logger = require  ('./middlewares/logger') ;
var date = new Date() ;
var mongoose = require ('mongoose') ;


//app.use(logger) 

mongoose.connect ('mongodb+srv://Islomjon:81657410im@cluster0.dy9lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') 
    .then(() =>{
    	console.log('Connect to mongodb...') ;
    	}) ;
    

 app.get('/', function(req, res){
 
	console.log('http://127.0.0.1:' + PORT + '/' + '     ' + new Date());
	}) ;
	
	
app.get('/api/phones', function  (req, res) {
	res.json(phones) ;
	console.log('http://127.0.0.1:' + PORT + '/api/phones/' + '     ' + new Date()) ;
	console.log(req.protocol) ;
	console.log(req.get('host')) ;

     }) ;
	
app.get('/api/phone/:id', (req, res) =>{
	
	console.log(`http://127.0.0.1:${PORT}/api/phone/:id   ${date}`) ;
	}) ;
	
app.get('/api/test', function  (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'home.html')) ;
      console.log('http://127.0.0.1:' + PORT + '/api/test/' + '     ' + new Date()) ;
	}) ;
	
app.get('/api/humans', function  (req, res) {
	res.json(humans) ;
	console.log('http://127.0.0.1:' + PORT + '/api/humans/' + '     '  + new Date()) ;
	}) ;
	

app.use(express.static(path.join(__dirname, 'public'))) ;
	
	
app.listen(PORT, function  (){
console.log('Server starting on http://127.0.0.1:' + PORT) ;
}) ;