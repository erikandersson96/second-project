
const easyOne = document.querySelector('.easy-one');
const easyTwo = document.querySelector('.easy-two');
const easyThree = document.querySelector('.easy-three');
const easyFour = document.querySelector('.easy-four'); 

const sequenceEasy = [easyOne, easyFour, easyTwo, easyThree]; 

const flashEasy = (easy) => {
    return new Promise((resolve, reject) => {
        easy.className += ' active';
        setTimeout(() => {
          easy.className = easy.className.replace(
           ' active', 
           ''
        ); 
           resolve(); 
        }, 800)
    });
 };
 

const mainEasy = async () => {
    for (let easy of sequenceEasy) {
    await flashEasy(easy);    

    }
   
}

mainEasy(); 

console.log(sequenceEasy); 










