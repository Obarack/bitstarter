var express = require('express');
var app = express();
var fs = require('fs');
var path = "index.html";
app.use(express.logger());

var htmlRender = function(fname) {
	var bufHtml = fs.readFileSync(path);
	var strHtml = bufHtml.toString();

	return strHtml;
}

app.get('/', function(request, response) {
  response.send(htmlRender());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
