const fs = require('fs');
//NEED TO BE HASHED IF MODE IS SWITCHED
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let fileName;
let expected = 'Test';

async function checkInput(name) {
  fs.readFile(name + '.txt', 'utf8', async (err, data) => {
    if (!err) {
      input = data;
      console.log(input);
      output = await processInput(input, expected);
      console.log(output);
    }
  });
}

//NEED TO BE HASHED IF MODE IS SWITCHED
readline.question('Filename: ', (name) => {
  checkInput(name);
  readline.close();
});
// checkInput('input');

async function processInput(input, expected) {
  return input === expected;
}
