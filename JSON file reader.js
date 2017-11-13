/*Part 2 Country Information App
- Create a separate module for reading and parsing the JSON file 'json-file-reader'.
- This module should have a parameter to take a filename and a parameter as a callback function. */

let fs = require("fs");					//File system module.

module.exports = {							//This module exports the JSON read and parse function.
	parsedJson: function (filename, callback) {			//The parameter filename takes any JSON file.
	  fs.readFile(filename, function (err, data){		//The readFile function that reads the JSON file and has a callback function at the second parameter.
	    if (err) {																	//If statement when errors occur.
	      return callback (err, null);							//Returns the callback parameter as an error or null, as you have two parameters for the callback function. However, the null is not really necessary. But it is more comprehensive this way.
	    }
	    let parsedFile = JSON.parse(data);					//When there is no error, the JSON file will be parsed and returned to the callback parameter.
	    return callback (null, parsedFile);
	  })
	}
}


