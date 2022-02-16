const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let survey = [];

rl.question('What is your name? ', (answer) => {
  survey.push(answer);

  rl.question('What is an activity you like doing? ', (answer) => {
    survey.push(answer);

    rl.question('What do you listen to while doing that? ', (answer) => {
      survey.push(answer);
    
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        survey.push(answer);
        
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          survey.push(answer);
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            survey.push(answer);
            
            rl.question('What is your superpower? ', (answer) => {
              survey.push(answer);
              printParagraph(survey);
              rl.close();
              
            });
          });
        });
      });
    });
  });
});

const printParagraph = (arr) => {
  console.log(`${arr[0]} loves listening to ${arr[2]} while ${arr[1]}, eating ${arr[4]} for ${arr[3]}, likes ${arr[5]} over any other sport, and is great at ${arr[6]}.`);
};
        
