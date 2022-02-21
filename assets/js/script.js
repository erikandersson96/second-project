
// Array for computer sequence and human sequence, Easy difficulty level
let sequenceEasy = []; 
let sequenceEasyHuman = []; 
let level = 0; 

const easyStart = document.querySelector('.easy-start'); 
const infoEasy = document.querySelector('.info-easy'); 

function startEasyGame() {
    infoEasy.classList.remove('hidden'); 
    infoEasy.textContent = 'The computer will play a random sequence'; 
} 

easyStart.addEventListener('click', startEasyGame); 

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


 















