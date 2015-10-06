////  server to get georgiaglassie.com up and running. using the node.js book as a guide to figuring out node ////
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8000); 

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.sendFile('./public/index.html');
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
	console.log('\n\n\nYO\n\n\n');

});

////////////All the handlebars crapamundo. will delete this nonsense lata////////////

//set up handlebars view engine
// var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');

// app.get('/', function(req, res){
// 	res.render('index');
// });

// app.get('/about', function(req, res){
// 	res.render('about');
// });

// //404 catch-all handler (middleware)
// app.use(function(req, res, next){
// 	res.status(404);
// 	res.render('404');
// });

// //500 catch-all handler (middleware)
// app.use(function(err, req, res, next){
// 	console.error(err.stack);
// 	res.status(500);
// 	res.send('500 - Server Error :-( ');
// });


