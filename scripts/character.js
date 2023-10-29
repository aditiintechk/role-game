import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js";

// Class and constructor

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
    
        this.diceArray = getDicePlaceholderHtml(this.diceCount)
    }


    getHealthBarHtml() {
        const percent = Math.floor(getPercentage(this.health,this.maxHealth))
        const dangerClass = percent <= 25 ? `danger` : '' 
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${dangerClass} " 
                        style="width: ${percent}%;">
                    </div>
                </div>`
    }


    getDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);

        this.diceArray = this.currentDiceScore
                        .map( num => `<div class="dice">${num}</div>` )
                        .join('')
    }
    
    takeDamage(attackScoreArray){

        let totalAttackScore = attackScoreArray.reduce ((sum, eachAttackScore) => sum + eachAttackScore, 0)

        this.health -= totalAttackScore

        if(this.health < 0) {
            this.isDead = true
            this.health = 0
        }
    }
    
    getCharacterHtml() {
        const {name, avatar, health} = this;

        const healthBar = this.getHealthBarHtml()

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character

// Constructor Function
/*
function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getHealthBarHtml = function() {
        const percent = Math.floor(getPercentage(this.health,this.maxHealth))
        const dangerClass = percent <= 25 ? `danger` : '' 
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${dangerClass} " 
                        style="width: ${percent}%;">
                    </div>
                </div>`
    }


    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);

        this.diceArray = this.currentDiceScore
                        .map( num => `<div class="dice">${num}</div>` )
                        .join('')
    }
    
    this.takeDamage = function(attackScoreArray){

        let totalAttackScore = attackScoreArray.reduce ((sum, eachAttackScore) => sum + eachAttackScore, 0)

        this.health -= totalAttackScore

        if(this.health < 0) {
            this.isDead = true
            this.health = 0
        }
    }
    
    this.getCharacterHtml = function () {
        const {name, avatar, health} = this;

        const healthBar = this.getHealthBarHtml()

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character */