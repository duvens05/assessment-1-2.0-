console.log("welcome!")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("password? ", function(input) {
	if (input.length <= 10){
        console.log("success")
    } else if (input.length >10){
        console.log("failure")
    } reader.close()
}) 

