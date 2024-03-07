//challenge 1 your age in days
function ageIn() {
var birthyear = prompt('what year were you born?');
var ageInDayss = (2023 - birthyear) * 365;
var h1 = document.createElement('h1');
var texAnswar = document.createTextNode('You are ' + ageInDayss +' days old.');
h1.setAttribute('id', 'ageInDayss');
h1.appendChild(texAnswar);
document.getElementById('flex-box-results').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDayss').remove();
  console.log("reset");
}

function generateCat(){
  var image = document.createElement('img');
  image.src="https://cdn2.thecatapi.com/images/987.jpg";
  // image.style.padding = '10px'
   // image.style.border = '1px solid green';
  // image.setAttribute('width', '200');
  // image.setAttribute('heigth', '200');
  var div = document.getElementById('cat-gen');
  div.appendChild(image);
}


// Challenge 3: Rock, papper, Scissors
function rpsGame(yourChoise){
  console.log(yourChoise);
  var humanChoice, botChoice;
  humanChoice = yourChoise.id;
  console.log(humanChoice)

  botChoice = numberToChoice(randToRpsInt());
  console.log('computer Choice', botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results); //'you won!', 'colur':}
  console.log(message);
  rpsFrontEnd(yourChoise.id, botChoice, message);
}

function randToRpsInt(){
  return Math.floor(Math.random() *3);
}

function numberToChoice(number) {
  return['rock', 'papper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
  var rpsDaTabase = {
    'rock': {'scissors': 1, 'rock':0.5, 'papper': 0},
    'papper': { 'rock': 1, 'papper': 0.5, 'scissors': 0},
    'scissors': {'papper': 1, 'scissors':0.5, 'rock': 0},
  }
  var YourScore = rpsDaTabase[yourChoice][computerChoice];
  var computerScore = rpsDaTabase[computerChoice][yourChoice];
  return[YourScore, computerScore];
}

function finalMessage([YourScore, computerScore]){
  if ((YourScore === 0) && (computerScore === 1)){
    return {'message': 'you lost', 'color': 'red'}
  } else if ((YourScore === 0.5) & (computerScore === 0.5)) {
    return{'message': 'you tied', 'color': 'yellow'};
  } else {
    return{'message': 'you won', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
  var imageDataBase = {
    'rock': document.getElementById('rock').src,
    'papper': document.getElementById('papper').src,
    'scissors': document.getElementById('scissors').src
  }
  
  // let rremove all the images
  document.getElementById('rock').remove();
  document.getElementById('papper').remove();
  document.getElementById('scissors').remove();

  var humanDive = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDive.innerHTML = "<img src='" + imageDataBase[humanImageChoice] +"' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 2);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding30px;'>" + finalMessage[message] + "</h1>"
  botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] +"' style='box-shadow: 0px 10px 50px rgba(300, 0, 0, 2);'>"
 

  document.getElementById('flex-box-rps-div').appendChild(humanDive);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// just trying the higher order fuction
// const mySalary = [ 50, 60, 40, 300, 400];
// mySalary.filter(n => n > 50);
// alert(mySalary);

// challenge 4: change the color of all button

var all_buttons = document.getElementsByTagName('button');
// console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
}


function buttonColorChange(buttonThingy){
 if (buttonThingy.value === 'red'){
  buttonRed();
 }else if (buttonThingy.value === 'green'){
  buttonGreen();
 } else if (buttonThingy.value === 'reset'){
  buttonReset();
 } else if (buttonThingy.value === 'random') {
  buttonRandom();
 }else if (buttonThingy.value === 'blue') {
  buttonBlue();
 }
}

function buttonRed(){
  for (let i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-danger');
  }
}
function buttonBlue(){
  for (let i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-info');
  }
}

function buttonGreen(){
  for (let i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-danger');
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-danger');
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-success');
  }
}

function buttonReset() {
    for( let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-info']

  for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}


// challenge 5: blackjack

let blackjackGame = {
  'you': {'scoreSpan': '.your-blackjack-results', 'div': '.your-box', 'score': 0},
  'dealer': {'scoreSpan': '.dealer-blackjack-results', 'div': '.dealer-box', 'score': 0},
'cards': ['2', '3', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
'cardMap':{'2': 2, '3': 3, '4': 4, '5':5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q' :10, 'K': 10, 'A': [1, 11]},
'wins': 0,
'losses': 0,
'draws': 0,
'isStand': false,
'turnsOver':false,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio ('images/hit.m4a');
const winSound = new Audio ('images/cash.mp3')
const lostSound = new Audio ('images/aww.mp3')

// document.querySelector('.your-blackjack-results').textContent = 0;
// document.querySelector('.dealer-blackjack-results').textContent = 0;

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
  if (blackjackGame['isStand'] === false){
  let card = randomCard();
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
}
}


function randomCard(){
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

 
function showCard(card, activePlayer){
  if (activePlayer['score'] <= 21){
    let cardImage = document.createElement('img')
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild  (cardImage);
    hitSound.play();
  }
}


function blackjackDeal(){
  if(blackjackGame['turnsOver'] === true){

    blackjackGame['isStand'] = false;

    let youImages = document.querySelector('.your-box').querySelectorAll('img');
    let dealImages = document.querySelector('.dealer-box').querySelectorAll('img');

    for ( i = 0; i < youImages.length; i++){
      youImages[i].remove();
    }

    for ( i = 0; i < dealImages.length; i++){
      dealImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('.your-blackjack-results').textContent = 0;
    document.querySelector('.dealer-blackjack-results').textContent = 0;

    document.querySelector('.your-blackjack-results').style.color = '#ffffff'
    document.querySelector('.dealer-blackjack-results').style.color = '#ffffff'
    document.querySelector('.balckjack-result').style.color = 'black'
    document.querySelector('.balckjack-result').textContent = "Let's play"
    blackjackGame['turnsOver'] = true;
  }
}


function updateScore(card, activePlayer){
  if (card == 'A'){
  if (activePlayer['score'] + blackjackGame['cardMap'][card][1] <= 21){
  activePlayer['score'] += blackjackGame['cardMap'][card][1];
  } else { activePlayer['score'] += blackjackGame['cardMap'][card][0];
 }
 } else {
  activePlayer['score'] += blackjackGame['cardMap'][card];
 }
}

function showScore(activePlayer){
  if (activePlayer['score'] >= 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleap(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
 blackjackGame['isStand'] = true;

 while (DEALER['score'] < 15 && blackjackGame['isStand'] === true){
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleap(1000);
 }

  blackjackGame['turnsOver'] = true;
  let winner = computeWinner();
  showResult(winner);
  console.log(blackjackGame['turnsOver']);
  }


// compute winner and return who just win 
//update win, draw and losses

function computeWinner(){
  let winner;
  if (YOU['score'] <= 21){
    //heigher scre than dealer wins or authomatically loose when bust
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
      blackjackGame['wins']++
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++
      winner = DEALER;
    } else if (YOU['score'] === 
    DEALER['score']){
      blackjackGame['draws']++
    } 
//condition when user bust but dealer doesn't
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses']++
    winner = DEALER


    //condition when you and the dealer bust
  }else if (YOU['score'] > 21 && DEALER['score'] > 21){
    blackjackGame['draws']++
    console.log('Yoy draw!');
  } else if(YOU['score'] <= 21 && DEALER['score'] > 21){
    blackjackGame['wins']++
    winner = YOU
  }

  console.log(blackjackGame);
  return winner;
}


function showResult(winner){
  let message, messageColor;

  if(blackjackGame['turnsOver'] === true){
    if (winner === YOU){
      document.querySelector('#wins').textContent = blackjackGame['wins']
      message = 'you won';
      messageColor = 'green';
      winSound.play();

    } else if (winner === DEALER){
      document.querySelector('#losses').textContent = blackjackGame['losses']
      message = 'you lost';
      messageColor = 'red';
      lostSound.play();

    }else{
      document.querySelector('#draws').textContent = blackjackGame['draws']
      message = 'you drew'
      messageColor = 'black'
    }

  document.querySelector('.balckjack-result').textContent = message;
  document.querySelector('.balckjack-result').style.color = messageColor;
 }
}


















      
