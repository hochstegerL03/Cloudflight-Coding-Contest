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
  const inOut = name.split(' ');
  fs.readFile(inOut[0] + '.txt', 'utf8', async (err, data) => {
    if (!err) {
      input = data;
      console.log(input);
      console.log(expected);
      output = await processInput(inOut[1], input, expected);
    }
  });
}

//NEED TO BE HASHED IF MODE IS SWITCHED
readline.question('Filenames: ', (name) => {
  checkInput(name);
  readline.close();
});
// checkInput('input output');

async function processInput(store, input, expected) {
  const result = (input === expected).toString();
  fs.writeFile(store + '.txt', result, (err) => {
    if (err) console.log(err);
    console.log(result);
  });
}
