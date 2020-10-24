var questions = document.querySelector("#questions");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");

var timerInterval;
var secondsLeft = 300;

var questions = [
  {
    q: "What is a string?",
    answers: [
      "A shoelace",
      "Text inside double or single quotes",
      "A piece of yarn",
      "Something used to tie objects together",
    ],
    correctAnswer: "B",
  },
  {
    q: "What is an array?",
    answers: [
      "A collection of items",
      "A script tag",
      "A number",
      "Lots of sunlight",
    ],
    correctAnswer: "A",
  },
  {
    q: "What is an iteration?",
    answers: [
      "Reading code",
      "The grammar of coding",
      "Looping to perform a group of tasks repeatedly",
      "Pushing to GitHub",
    ],
    correctAnswer: "C",
  },
  {
    q: "What is a boolean?",
    answers: [
      "A diet plan",
      "A scary monster",
      "A binary variable representing true or false",
      "Moving in a sloping position",
    ],
    correctAnswer: "C",
  },
  {
    q: "What is a function?",
    answers: [
      "Blocks of code which can be called on demand",
      "A for loop",
      "A party",
      "To arrange according to a plan or schedule",
    ],
    correctAnswer: "A",
  },
  {
    q: "What is a conditional?",
    answers: ["A health issue", "Hair product", "If/ Else", "True or False"],
    correctAnswer: "C",
  },
  {
    q: "What does ++ stand for?",
    answers: ["getElementById", "Addition", "Increment", "Add it twice"],
    correctAnswer: "C",
  },
  {
    q: "What does % represent?",
    answers: ["Percentile", "Seesaw", "Subtract", "Modulus"],
    correctAnswer: "D",
  },
  {
    q: "What does != mean?",
    answers: ["Not equal", "Equal value", "Yay", "Samesies"],
    correctAnswer: "A",
  },
  {
    q: "What does === stand for?",
    answers: [
      "Division remainder",
      "Equal value and equal type",
      "Not equal",
      "Equal to",
    ],
    correctAnswer: "B",
  },
];

var timer = document.querySelector("#timer");
var startButton = document.querySelector("#Start");
startButton.addEventListener("click", function () {
  console.log("startbuttonclicked");
  timerInterval = setInterval(setTimer, 1000);
});

function setTimer() {
  secondsLeft--;
  timer.textContent = secondsLeft;
}

var questionsPointer = 0;

function setQuestions() {
  questions.textContent = questions[questionsPointer].q;
  optionA.textContent = questions[questionsPointer].answers[0];
  optionB.textContent = questions[questionsPointer].answers[1];
  optionC.textContent = questions[questionsPointer].answers[2];
  optionD.textContent = questions[questionsPointer].answers[3];
}

setQuestions();

optionA.addEventListener("click", function () {
  if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct");
    questionsPointer++;
    setQuestions();
  } else {
    console.log("wrong");
  }
});

optionB.addEventListener("click", function () {
  if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct");
    questionsPointer++;
    setQuestions();
  } else {
    console.log("wrong");
  }
});

optionC.addEventListener("click", function () {
  if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct");
    questionsPointer++;
    setQuestions();
  } else {
    console.log("wrong");
  }
});
optionD.addEventListener("click", function () {
  if (optionD.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("This is correct");
    questionsPointer++;
    setQuestions();
  } else {
    console.log("wrong");
  }
});
