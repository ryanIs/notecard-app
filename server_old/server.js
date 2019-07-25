var http = require('http');
var fs = require('fs');
var port = 4444;

http.createServer(function(request, response)
{
	var url = request.url;

	console.log("Attempting access url : ", url);

	switch(url)
	{
		case '/':
			getStaticFileContent(response, '../client/index.html', "text/html");
		break;
		case '/get_note_cards':
			getDynamicFileContent(response);
		break;
		default:
			getStaticFileContent(response, '../client' + url + ".html", "text/html");
		break;
	}

}).listen(port);

function getDynamicFileContent(response)
{
	var jsonCourses = fs.readFileSync("data/courses.json").toString();

	console.log("Returning note card data ", jsonCourses);

	response.writeHead(200, {"Content-type" : "application/json"});

	response.end(jsonCourses);
}

function getStaticFileContent(response, filepath, contentType)
{
	fs.readFile(filepath, function(error, data)
	{
		if(error){
			response.writeHead(500, {"Content-Type" : "text/plain"});
			response.end('500 - INTERNAL SERVER ERROR. INVALID URL');
		}
		else if(data)
		{
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.end(data);
		}
	});
}

console.log("CLIENT STARTED ON PORT ", port);