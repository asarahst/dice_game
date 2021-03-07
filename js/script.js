const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

function randomDice(){

var randomNumber1 = (Math.random() * 5 + 1).toFixed();
var randomNumber2 = (Math.random() * 5 + 1).toFixed();


img1.setAttribute("src",`./images/dice${randomNumber1}.png`);
img2.setAttribute("src",`./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Wins !";
} else if (randomNumber1 == randomNumber2) {
    h1.innerHTML = "Draw !";
} else {
    h1.innerHTML = "Player 2 Wins !";
}

}
randomDice()
window.addEventListener('click', e =>{
    el = e.target
    if(el.classList.contains('btn') == true){
        randomDice()
    }
})