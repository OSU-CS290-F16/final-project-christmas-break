var path = require('path');

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;
var fs = require('fs');
var mysql = require('mysql');

// console.log('Mysql: ',mysql)

var mysqlconnection = mysql.createConnection({database: 'test1'});

console.log('Mysql: ',mysqlconnection)

console.log('Hello World');
var http = require('http');

function handle (request, response) {



var filePath = '.' + request.url;
var path = require('path');
 	response.writeHead(200)
	console.log('request for:   ', filePath);
//	response.end('YES');

if (filePath == './') {
	filePath += 'public/index.html';


var contents = fs.readFileSync(filePath, 'utf8');
response.writeHead(200, {'Content-Type': 'text/html'});	
response.write(contents);
	
	response.end();

		
	}


if (filePath == './style.css') {
	filePath = 'public/style.css';
	
	var contents = fs.readFileSync(filePath, 'utf8');
	response.writeHead(200, {'Content-Type': 'text/css'});	
	
	//fs.readFile(public/
	console.log('request processing for:   style.css', filePath);
	response.write(contents);
	
	response.end();

	}

if (filePath == './index.js') {
	filePath = 'public/index.js';
	
var contents =	fs.readFileSync(filePath, 'utf8');
	response.writeHead(200, {'Content-Type': 'text/javascript'});	
	
	//fs.readFile(public/
	console.log('request processing for:   index.js', filePath);
	response.write(contents);
	//response.writeHead
	response.end();

	}

if (filePath != './') {
	filePath = 'public/404.html';
	response.writeHead(404);	


var contents = fs.readFileSync(filePath, 'utf8');	
response.write(contents);
	
	response.end();


	}


}





var server = http.createServer(handle);

server.listen(port, function(){

console.log('== up and running on port#:     ', port);


});

