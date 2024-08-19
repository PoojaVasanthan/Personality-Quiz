/*Add your JavaScript here*/
var countOne = 0;
var countTwo = 0;
var questionCount = 0;
var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener("click", outdoors);

var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener("click", indoors);

var q2a1 = document.getElementById("q2a1");
q2a1.addEventListener("click",indoors);

var q2a2 = document.getElementById("q2a2");
q2a2.addEventListener("click",outdoors);

var q3a1 = document.getElementById("q3a1");
q3a1.addEventListener("click", outdoors);

var q3a2 = document.getElementById("q3a2");
q3a2.addEventListener("click", indoors);

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

var result = document.getElementById("result");

function outdoors()
{
  questionCount+=1;
  countOne+=1;
  if(countOne >= 2 && questionCount == 3)
  {
    document.getElementById("result").innerHTML = "You are an outdoors person!";
    }
}

function indoors()
{
  questionCount+=1;
  countTwo+=1;
  if(countTwo >= 2 && questionCount == 3)
  {
    document.getElementById("result").innerHTML = "You are an indoors person!";
  }
}

function restartQuiz()
{
  countOne = 0;
  countTwo = 0;
  questionCount = 0;
  document.getElementById("result").innerHTML = "Your result is...";
}
