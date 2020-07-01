// CRUD create (.post) read (.get) ipdate (.post) delete (.delete)
const data = require('../db/db.json');
const fs = require('fs');
module.exports = function (app) {
	app.get('/api/notes', function (req, res) {
		res.json(data);
	});
	app.post(function (req, res) {
		data.push(req.body);
		// this request is coming from server.js so only need ./ local
		fs.writeFile('./db/db.json', JSON.stringify(data), function (err) {
			if (err) throw err;
		});
		// pushed into db but need to show on screen
		res.json(data);
	});
};
