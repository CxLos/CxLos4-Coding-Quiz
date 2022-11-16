///////////////Timer variables///////////////////
var timer = document.querySelector('#timer')
const question = document.querySelector('#question')
const ready = document.querySelector('.ready')
const randomQ, currentQIndex
////////////////Timer/////////////////////
function countDown()  {
    var x = 60
    var timeInterval = setInterval(function () {

        if(x > 0) {

            timer.textContent = x; + "seconds remaining"
            x--;

        } else {
            timer.textContent = 'Times Up!';
            clearInterval(timeInterval);
            
            displayMessage();
        }

        console.log('started')
    }, 1000);
}

/////////////////Display Message//////////////////
function displayMessage () {
    var count = 0;

    var msgInterval = setInterval(function () {
        if (words[count] === undefined) {
            clearInterval(msgInterval);

        } else {
            timer.textContent = words[count];
            count ++;
        }
    }, 1000)
}
//////////////////////Start Quiz/////////////////////
function letsGo() {
    startq.classList.add('hide')
    ready.classList.add('hide')
    question.classList.remove('hide')
    randomQ = question0.sort(() => Math.random() - .5)
    currentQIndex = 0
    nextQuestion()
}
///////////////////Quiz Questions///////////////////
const quizz = [
    {
        question0: 'What was the start date of this class?',
        answers: [
            {text: 'Oct. 10th', correct: false},
            {text: 'Oct. 18th', correct: false},
            {text: 'Oct. 17th', correct: true},
            {text: 'Oct. 20th', correct: false},
          
        ]
    }
]

function nextQ() {
    showQ(randomQ[currentQIndex])

}

///////////////////eventListener//////////////////
var startq = document.querySelector('#go');

startq.addEventListener('click', letsGo);
startq.addEventListener('click', countDown);


