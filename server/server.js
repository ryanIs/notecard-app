var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var port = 4444;

app.get('/', function(request, response)
{
	response.sendFile(path.join(__dirname, '../client', 'index.html'));
});


app.get('/get_note_cards', function(request, response)
{	
	var jsonCourses = fs.readFileSync("data/courses.json").toString();

	console.log("Returning note card data ", jsonCourses);

	response.writeHead(200, {"Content-type" : "application/json"});
	
	response.end(jsonCourses);
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, function()
{
	console.log("CLIENT STARTED ON PORT ", port);	
});