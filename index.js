import { characterData } from "./scripts/data.js"
import Character from "./scripts/character.js";

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
   if(!isWaiting) {
      wizard.getDiceHtml()
      monster.getDiceHtml()
  
      wizard.takeDamage(monster.currentDiceScore)
      monster.takeDamage(wizard.currentDiceScore)
  
      if(wizard.isDead){
          endGame()
      }
      else if(monster.isDead){
         isWaiting = true

         if(monstersArray.length > 0){
         setTimeout(() => {
            monster = getNewMonster()
            render()
            isWaiting = false
         }, 500)

         }
         else{
            endGame()
         }
      }
  
      render()
   }  
}

function endGame() {
   isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
            "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

    setTimeout(() => {
      document.body.innerHTML = `
      <div class="end-game">
          <h2>Game Over</h2> 
          <h3>${endMessage}</h3>
          <p class="end-emoji">${endEmoji}</p>
      </div>`
    }, 1000)
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()




 


























// evolution of solutions with advanced javascript

// renderCharacter --> Character Constructor
/*
function renderCharacter(data) {
   const {elementId, name, avatar, health, diceRoll} = data
   const diceHtml = getDiceHtml(diceCount)
   document.getElementById(elementId).innerHTML =
       `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">
               <div class="dice"> ${diceHtml} </div>
           </div>
       </div>`
} */


// for loop --> Array Constructor
/*
function getDiceRollArray(diceCount) {
   let randomNumbersArr = []
   let randomNum
   for(let i = 0; i < diceCount; i++) {
      // to get 1-6 range
      randomNum = Math.floor(Math.random() * 6) + 1
      randomNumbersArr.push(randomNum)
   }
   
   return randomNumbersArr
} */


// simple function --> constructor method

/*
function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map(function(eachRoll) {
      return `<div class="dice"> ${eachRoll} </div>`
   }).join('')
} */


// Object --> Nested Objects

/*
const hero = {
      elementId: 'hero',
      name: 'Wizard',
      avatar: 'images/wizard.png',
      health: 60,
      diceCount: 3
   }
   
const monster = {
   elementId: 'monster',
   name: 'Orc',
   avatar: 'images/orc.png',
   health: 10,
   diceCount: 1
} */