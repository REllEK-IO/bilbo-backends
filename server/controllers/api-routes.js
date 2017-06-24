var path = require("path");
var fs = require("fs");
var Article = require("../models/article");

module.exports = function (app) {
  app.get("/api/code", function (req, res) {
			const testFolder = './tests/';
			const fs = require('fs');

			fs.readdir(testFolder, (err, files) => {
				var str = "";
				files.forEach(file => {
					str += file + "\n";
				});
				res.json(str);
			})
		})
	}