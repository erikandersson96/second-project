
// Array for computer sequence and human sequence, Easy difficulty level
let sequenceEasy = []; 
let sequenceEasyHuman = []; 
let level = 0; 

const easyStart = document.querySelector('.easy-start'); 
const infoEasy = document.querySelector('.info-easy'); 


function flashCircleEasy(circle) {
    const circleEasy = document.querySelector(`[data-circle-easy='${circle}']`); 

    circleEasy.classList.add('flash'); 

    setTimeout(() => {
        circleEasy.classList.remove('flash'); 
    }, 600); 
} 

function playSequence(nextSequenceEasy) {
    nextSequenceEasy.forEach((circle, index) => {
        setTimeout(() => {
            flashCircleEasy(circle);
        }, (index + 1) * 600); 
    }); 
}

function nextStepEasy() {
    const circleEasy = ['easy-one', 'easy-two', 'easy-three', 'easy-four']; 
    const randomEasy = circleEasy[Math.floor(Math.random() * circleEasy.length)];

    return randomEasy; 
}

function nextRoundEasy() {
    level += 1; 

    const nextSequenceEasy = [...sequenceEasy]; 
    nextSequenceEasy.push(nextStepEasy()); 
}; 


function startEasyGame() {
    infoEasy.classList.remove('hidden'); 
    infoEasy.textContent = 'The computer will play a random sequence'; 
} 

easyStart.addEventListener('click', startEasyGame); 













