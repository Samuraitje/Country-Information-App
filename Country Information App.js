/*Part 1 Country Information App
- Take one parameter (country name) of the command line using process.argv.
- Read and parse the countries.json file.
- Output the topLevelDomain about that specific country by command line parameter input.*/

let fs = require("fs"); 													//File system module to read / create / update / delete or rename files, in this case read file
	fs.readFile("countries.json", function (err, countries) {
		if (err) {																		//If statement on when an error occurs, it is possible to generate an error message with the throw statement.
			throw err;											
		}
		let parsedFile = JSON.parse(countries);				//The JSON file countries will be parsed by the JSON.parse function.
		parsedFile.forEach(function(countryInfo){			//forEach statement that will through the whole JSON file and analyse each object within the file.
			if(countryInfo.name === process.argv[2]){		//The forEach function calls the the 'countryInfo' function that will try to match the name property of every each objects with the input from the command line (name of the country) through the process.argv global array [2]. 		
				console.log(`Country: ${countryInfo.name} Top Level Domain: ${countryInfo.topLevelDomain}`); //Prints the name of the country and its TopLevelDomain.
			}
		}) 
	});



/*Part 2 Country Information App
- Create a separate module for reading and parsing the JSON file 'json-file-reader'.
- This module should have a parameter to take a filename and a parameter as a callback function. */

const jsonFileReader = require('./JSON file reader.js');							//The module form the file JSON file reader is being imported and stored as a const, because the data needs to be fixed.
	jsonFileReader.parsedJson("countries.json", function (err, data){		//In this the parsedJson function from the imported module is used to read and parse the countries.json file.
	  if (err) {																												//If statement for error handling and execute error message.
	    console.log("Error, this is not a JSON file!");
	  } else {													
	    data.forEach(function(dataInfo){																//Else statement that will use a forEach loop to go through every object from the parsed JSON file.
	      for(i = 2; i < process.argv.length; i++) {										//A for loop that will start on the 3rd argument as the first 2 command lines are used for the excess path and the file path of the read JavaScript file, also through this loop, multiple command lines can be read till it finds the correct argument.
	        if (dataInfo.name === process.argv[i]){											//If statement to match the argument input to the JSON object. 
	          console.log(`Country: ${dataInfo.name} Top Level Domain: ${dataInfo.topLevelDomain}`); //Print the corresponding output.
	        }
	      }
	    })
	  }
	});