let question1 = "What is a string?";
let question2 = "What is an array?";
let question3 = "What is an iteration?";
let question4 = "What is a boolean?";
let question5 = "What is a function?";
let question6 = "What is a conditional?";
let question7 = "What does ++ stand for?";
let question8 = "What does % represent?";
let question9 = "What does != mean?";
let question10 = "What does === stand for?";


var timerInterval;
var secondsLeft = 300

let questionsArray = [{
        question: "What is a string?",
        answers: ["A shoelace", "Text inside double or single quotes", "A piece of yarn", "Something used to tie objects together"],
        correctAnswer: "Text inside double or single quotes"
    },
    {
        question: "What is an array?",
        answers: ["A collection of items", "A script tag", "A number", "Lots of sunlight"],
        correctAnswer: "A collection of items"
    },
    {
        question: "What is an iteration?",
        answers: ["Reading code", "The grammar of coding", "Looping to perform a group of tasks repeatedly", "Pushing to GitHub"],
        correctAnswer: "Looping to perform a group of tasks repeatedly"
    },
    {
        question: "What is a boolean?",
        answers: ["A diet plan", "A scary monster", "A binary variable representing true or false", "Moving in a sloping position"],
        correctAnswer: "A binary variable representing true or false"
    },
    {
        question: "What is a function?",
        answers: ["Blocks of code which can be called on demand", "A for loop", "A party", "To arrange according to a plan or schedule"],
        correctAnswer: "Blocks of code which can be called on demand"
    },
    {
        question: "What is a conditional?",
        answers: ["A health issue", "Hair product", "If/ Else", "True or False"],
        correctAnswer: "If/ Else"
    },
    {
        question: "What does ++ stand for?",
        answers: ["getElementById", "Addition", "Increment", "Add it twice"],
        correctAnswer: "Increment"
    },
    {
        question: "What does % represent?",
        answers: ["Percentile", "Seesaw", "Subtract", "Modulus"],
        correctAnswer: "Modulus"
    },
    {
        question: "What does != mean?",
        answers: ["Not equal", "Equal value", "Yay", "Samesies"],
        correctAnswer: "Not equal"
    },
    {
        question: "What does === stand for?",
        answers: ["Division remainder", "Equal value and equal type", "Not equal", "Equal to"],
        correctAnswer: "Equal value and equal type"
    },
];

var timer = document.querySelector("#timer");
var startButton = document.querySelector("#Start");
startButton.addEventListener("click", function () {
    console.log("startbuttonclicked");
    timerInterval = setInterval(setTimer, 1000)
});

function setTimer() {
    secondsLeft--;
    timer.textContent = secondsLeft;

}