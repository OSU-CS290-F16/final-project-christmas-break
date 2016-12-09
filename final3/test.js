var path = require('path');
var express = require('express');
var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;
var fs = require('fs');
var app = express();
var itemPage = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
var mysql = require('mysql');

//SETS UP CONNECTION

var mysqlConnection = mysql.createConnection({database: 'z',user: 'aaa'});




debugger;

var http = require('http');


function placeInventory (req, response) {

		var list = '<li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li>';

		itemPage = itemPage.replace(new RegExp('{{itemlist}}', 'g'), list)
	console.log("IN INVENTORY FUNCTION!");
		response.end();

}



function handle (request, response) {
debugger;


app.get ('./item' , function (request, response) {

	console.log("YOU IN THE ITEM MODAL!");
	
	
		var list = '<li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li>';

		itemPage = itemPage.replace(new RegExp('{{itemlist}}', 'g'), list)
	console.log("IN INVENTORY FUNCTION!");

		console.log("YOU IN THE END OF THE ITEM MODAL!");
		response.end()

});




var filePath = '.' + request.url;
var path = require('path');
 	response.writeHead(200)
var itemin = filePath.replace(/.*insert\+(.+)\+(.*)$/,"$1");
var cntin = filePath.replace(/.*insert\+(.+)\+(.*)$/,"$2");
var addCheck = filePath.replace(/.*insert\+.*/, "1");

if (addCheck == "1") {
mysqlConnection.query('insert into  physical(item, qty) values(?, ?)',[itemin,cntin], function (err, rows) {


	console.log('Pushed to Database:   ', 'item: ', itemin, 'qty: ', cntin);

    if (err) {

      /*
       * Send an error response if there was a problem fetching the person
       * from the DB.
       */
      console.log("Entering Select");
     // res.status(500).send("Error fetching person from database: " + err);

    } /*else  {console.log("Entering Else",rows);
               for (var i = 0; i < rows.length; i++)
                 {
                  console.log(rows[i].a,"   ",rows[i].b);
                  }

           }*/
   });

}


//	response.end('YES');


if (filePath == './') {
	filePath += 'public/index.html';


var contents = fs.readFileSync(filePath, 'utf8');
response.writeHead(200, {'Content-Type': 'text/html'});	
response.write(contents);
	
	response.end();

		
	}

//ITEM CATCH


if (filePath == './item') {
		console.log("FOUND THE ITEM!");


		
		
		var list = '<li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li>';
                var xxx = "test it";
                var zzz = xxx.replace('test', 'fix');
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");		
		console.log(zzz); 
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");	
		placeInventory(request, response);	
		staticDir = staticDir.replace(new RegExp('{{itemlist}}', 'g'), list)


		response.writeHead(200, {'Content-Type': 'text/html'});	
		response.write(staticDir);
		 
}
//CATALOG CATCH
if (filePath == './catalog') {
		console.log("FOUND THE CATALOG!");
}



if (filePath == './style.css') {
	filePath = 'public/style.css';
	
	var contents = fs.readFileSync(filePath, 'utf8');
	response.writeHead(200, {'Content-Type': 'text/css'});	
	
	//fs.readFile(public/
	response.write(contents);
	
	response.end();

	}

if (filePath == './index.js') {
	filePath = 'public/index.js';
	
var contents =	fs.readFileSync(filePath, 'utf8');
	response.writeHead(200, {'Content-Type': 'text/javascript'});	
	
	//fs.readFile(public/
	response.write(contents);
	//response.writeHead
	response.end();

	}




if (filePath != './') {
	request = "./";
	//location.href = './';
filePath = 'public/index.html';
		

/*
var contents = fs.readFileSync(filePath, 'utf8');
response.writeHead(200, {'Content-Type': 'text/html'});	
response.write(contents);
*/	
	response.writeHead(301, {Location: 'localhost:3000'});
	response.end();

		
	}



}


app.get (function placeInventory (req, res) {
		var content = "index";
		
		var list = '<li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li><li> WHATUP! </li><li> WHATUP YO! </li>';

		content = content.replace(new RegExp('{{itemlist}}', 'g'), list);

res.sendFile(fs.readFileSync(path.join (__dirname, 'public', 'index.html'), 'utf8')); 

		console.log("PLACING INVENTORY LIST!");
		
			
});



//var htmlLocation = fs.readFileSync(path.join (__dirname, 'public', 'index.html'), 'utf8'); 
//placeInventory ();



var server = http.createServer(handle);

server.listen(port, function(){

console.log('== up and running on port#:     ', port);


});

