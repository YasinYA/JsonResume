var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app
	.use(express.static('./public/'))
	.use(bodyParser.json())
	.get('/data', function(req, res) {
		res.sendfile('public/js/resumedata.json');
	})
	.get('*', function(req, res) {
		res.sendfile('public/index.html');
	})
	.listen(3000);
	console.log('Server is running on port 3000');