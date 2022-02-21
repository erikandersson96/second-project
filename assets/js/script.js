
// Array for computer sequence and human sequence. Easy difficulty level
let sequenceEasy = ['easy-one', 'easy-two', 'easy-three', 'easy-four']; 
let sequenceEasyHuman = []; 
let level = 0; 

const easyStart = document.querySelector('.easy-start'); 
const infoEasy = document.querySelector('.info-easy'); 

// This function makes sure that 
function flashCircleEasy(circle) {
    const circleEasy = document.querySelector(`[data-circle-easy='${circle}']`); 

    circleEasy.classList.add('flash'); 

    setTimeout(() => {
        circleEasy.classList.remove('flash'); 
    }, 400); 
} 

// This function make sure that each circle flashes with a delay between each other in the sequence
function playSequence(nextSequenceEasy) {
    nextSequenceEasy.forEach((circle, index) => {
        setTimeout(() => {
            flashCircleEasy(circle);
        }, (index + 1) * 700); 
    }); 
}


// This function makes sure that 
function nextStepEasy() {
    const circleEasy = ['easy-one', 'easy-two', 'easy-three', 'easy-four']; 
    const randomEasy = circleEasy[Math.floor(Math.random() * circleEasy.length)];

    return randomEasy; 
}
// This nested function makes sure that
function nextRoundEasy() {
    level += 1; 

    const nextSequenceEasy = [...sequenceEasy]; 
    nextSequenceEasy.push(nextStepEasy()); 
    playSequence(nextStepEasy);
} 

// This function handles the information text above the game play
function startEasyGame() {
    infoEasy.classList.remove('hidden'); 
    infoEasy.textContent = 'The computer will play a random sequence'; 
    nextRoundEasy(); 
} 

easyStart.addEventListener('click', startEasyGame); 













