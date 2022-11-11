var readlineSync = require("readline-sync");

var score = 0;

const chalk = require("chalk");

//data of highest scores
var highScores = [
  {
    name: "Jayesh",
    score: 3
  },
  {
    name: "Gargi",
    score: 2
  }
]

var questions = [
  {
    question: chalk.redBright("Where do I live? "),
    answer: "Dhule"
  },
  {
    question: chalk.cyanBright("Which is my favorite sport? "),
    answer: "Football"
  },
  {
    question: chalk.magentaBright("Who is my favorite footballer? "),
    answer: "Ronaldo"
  },
  {
    question: chalk.greenBright("Who is my girfriend right now? "),
    answer: "Gargi"
  },{
    question: chalk.yellowBright("Which college do I study in? "),
    answer: "VESIT"
  },{
    question: chalk.blueBright("When will I graduate? "),
    answer: "2023"
  }
];

function welcome() {
  var userName = readlineSync.question("What is your name ? ");
  console.log(" ");
  console.log(chalk.yellow("Welcome ") + userName + chalk.green(" to Explore Jayesh !"));
  console.log(" ");
}

function initiate() {
  options = ['YES', 'NO'];
  console.log('Are you ready to play the game ?');
  index = readlineSync.keyInSelect(options, '');

  if (options[index] === options[0]) {
    console.log(" ");
    readlineSync.keyInPause('HERE WE GOOOOO ! ');
    console.log(" ");
    game();
    displayScore();
  }

  if (options[index] === options[1]) {

    console.log(" ");
    console.log("OK you can play the game now!");
    console.log(" ");
  }
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("RIGHT !"));
    score = score + 1;
  }
  else {
    console.log(chalk.bgRed("WRONG !"));
  }
  console.log("current score: ", score);
  console.log(" ");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function displayScore() {
  console.log(chalk.inverse("Congratulations ! Your SCORE is : ", score + " "));
  console.log(" ");

  console.log("Check out the high scores, if you should be there then ping me and I'll update it");


  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
initiate();