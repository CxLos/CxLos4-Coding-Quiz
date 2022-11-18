///////////////Timer variables///////////////////
const timer = document.querySelector('#timer')
const quizbox = document.querySelector('#quizbox')
const question = document.querySelector('#question')
const ready = document.querySelector('.ready')
const answer = document.querySelector('.btnbox')
const input = document.querySelector('#container2')
var startq = document.querySelector('#go');
var submit = document.querySelector('#submit')
var x = 60
let randomQ, currentQIndex

////////////////Timer/////////////////////
function countDown()  {
    var timeInterval = setInterval(function () {

        if(x > 0) {

            timer.textContent = x; + "seconds remaining"
            x--;

        } else {
            timer.textContent = 'Times Up!';
            clearInterval(timeInterval);
            
            gameOver();
        }

        console.log('started')
    }, 1000);
}

/////////////////Display Message//////////////////
function gameOver () {
    // var over = document.createElement('h2')
    // over.classList.add('h2')
    question.innerHTML = 'Game Over!'
    answer.classList.add('hide')
    input.classList.remove('hide')

//     var count = 0;

//     var msgInterval = setInterval(function () {
//         if (word[count] === undefined) {
//             clearInterval(msgInterval);

//         } else {
//             timer.textContent = words[count];
//             count ++;
//         }
//     }, 1000)
 }
//////////////////////Start Quiz/////////////////////
function letsGo() {
    startq.classList.add('hide')
    ready.classList.add('hide')
    answer.classList.remove('hide')
    question.classList.remove('hide')
    randomQ = quizz.sort(() => Math.random() - .5)
    currentQIndex = 0
    nextQ()
}
///////////////////Quiz Questions///////////////////


function nextQ() {
    showQ(randomQ[currentQIndex])
    //results ()
}

function showQ(question0){
    question.innerText = question0.question0
    answer.innerHTML = ''
    question0.answers.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        if (option.correct) {
            button.dataset.correct = option.correct
        }

        console.log(option)
        button.addEventListener('click', chooseA)
        answer.appendChild(button)
        
    });
}

// function restartQ() {
//     nextb
// }

function chooseA(e) {
    e.preventDefault() 
    console.log(e) 
    var isCorrect = e.target.getAttribute ('data-correct')

    if (isCorrect) {
        currentQIndex ++
        nextQ()       
        // alert('Correct!')
    } else {
        // alert('Incorrect')
        x -= 10
        nextQ()
    }
    
}

function homePage() {
    question.classList.remove('hide')
    startq.classList.remove('hide')
    input.classList.add('hide')
}

const quizz = [
    {
        question0: 'What was the start date of this class?',
        answers: [
            {text: 'Oct. 10th', correct: false},
            {text: 'Oct. 18th', correct: false},
            {text: 'Oct. 17th', correct: true},
            {text: 'Oct. 20th', correct: false},
        ]
    },
    {
        question0: 'What topic did we cover in week 4 of the bootcamp?',
        answers: [
            {text: 'GitHub', correct: false },
            {text: 'Web APIs', correct: true },
            {text: 'Javascript', correct: false },
            {text: 'CSS', correct: false },
        ]
    },
    {
        question0: 'Which of the following is a vegetable?',
        answers: [
            {text: 'Tomato', correct: false },
            {text: 'Cucumber', correct: false },
            {text: 'Pumpkin', correct: false },
            {text: 'Corn', correct: true },
        ]
    },
    {
        question0: 'Which continent is Kazakstan in?',
        answers: [
            {text: 'Europe', correct: false },
            {text: 'Asia', correct: true },
            {text: 'Antarctica', correct: false },
            {text: 'Africa', correct: false },
        ]
    }
]

// result () {

// }

///////////////////eventListener//////////////////


startq.addEventListener('click', letsGo);
startq.addEventListener('click', countDown);

submit.addEventListener('click', homePage);

/////////Tutoring Questions////////////

//1. function (element) ??
//2. function (element, index) ??
//3. cant append new buttons and make old ones disappear
//4. getting error 'word not defined at ln 34'
//5. 
