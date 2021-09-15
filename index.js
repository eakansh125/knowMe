var readlineSync = require('readline-sync');

var username = readlineSync.question("Hey there, what's your name?");
var score = 0;

console.log("Hey " + username + "! Lets play a quick game to test how much you know me");
console.log("Let's begin!!");

console.log("--------------------------------------");

function play(question , answer)
{
  var userAnswer = readlineSync.question(question);

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
}]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].ques,questions[i].ans)
  console.log("--------------------------------------");
}

console.log(" ")

if(score === 0)
console.log("Bad luck, try again!")

else if(score>0 && score<3)
console.log("Hmmm "+score+ "! Not bad")

else if(score === 3)
console.log("Cool!! "+score+ " out of 4. You sure are an enthusiast!")

else
console.log("PERFECT!! 4 outa 4 Way to go!!")
