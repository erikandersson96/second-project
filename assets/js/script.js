
const easyOne = document.querySelector('.easy-green');
const easyTwo = document.querySelector('.easy-blue');
const easyThree = document.querySelector('.easy-yellow');
const easyFour = document.querySelector('.easy-red'); 

const sequenceEasy = [easyGreen, easyRed, easyBlue, easyYellow]; 

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

console.log(flashEasy); 










