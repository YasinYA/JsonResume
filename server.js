var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app
	.set('port', process.env.PORT || 3000)
	.use(express.static('./public/'))
	.use(bodyParser.json())
	.get('/data', function(req, res) {
		res.sendFile(__dirname + '/public/js/resumedata.json');
	})
	.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/views/resume.html');
	})
	.listen(app.get('port'), function(){  console.log('Server is running on port ' + app.get('port')); });
	