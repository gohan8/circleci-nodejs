var config = require("../config");
var fs = require('fs');

var m={};	//temp module context

const HTTP_INTERNAL_ERROR =500;
const HTTP_OK = 200;

/* Http request handle: returns the context of a html file
*/

m.httpGet = function( req, res ) {
	fs.readFile(config.app.view + config.app.mainHtml, (err, data) => {
		res.setHeader('Content-Type', 'text/html');
		if (err) {
			res.statuscode = HTTP_INTERNAL_ERROR;
			res.write("<h1>Internal Error<\h1>");
		}else{
			res.statuscode = HTTP_OK;
			res.write(data);
		}
		return res.end();
	});
}

m.serverCallback = function() {
	console.log("Server initialized!");
}

module.exports = m;