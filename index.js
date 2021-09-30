var readlineSync = require('readline-sync');

var username = readlineSync.question("Hey there, what's your name?");
var score = 0;

console.log("Hey " + username + "! Lets play a quick game to test how much you know me");
console.log("Let's begin!!");

console.log("--------------------------------------");

function play(question , answer) //function for iterating questions with answers
{
  var userAnswer = readlineSync.question(question); //user's answer

  if(userAnswer === answer)
  {
    console.log("right!")
    score++;
  }
    
  else
    console.log("wrong!")

  console.log("Current score: "+score)
}

var questions = [{
  ques : "Where do I live?",
  ans :  "lucknow"
},

{
  ques : "What extra co curricular I am good at?",
  ans :  "music"
},

{
  ques : "Which month was I born?",
  ans :  "december"
},

{
  ques : "Which is my favourite superhero?",
  ans :  "batman"
},

{
  ques : "Which is my favourite sport?",
  ans :  "football"
},

{
  ques : "What is my favourite destination?",
  ans :  "barcelona"
}
]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].ques,questions[i].ans)
  console.log("--------------------------------------");
}

console.log(" ")

if(score === 0)
console.log("Bad luck, try again!")

else if(score>0 && score<4)
console.log("Hmmm "+score+ "! Not bad")

else if(score>=4 && score<6)
console.log("Cool!! "+score+ " out of 6. You sure are an enthusiast!")

else
console.log("PERFECT!! 6 outa 6 Way to go!!")
