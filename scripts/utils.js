// To generate random dice rolls 
function getDiceRollArray(diceCount) {
    return new Array(diceCount)
                .fill(0).map(() => Math.floor(Math.random() * 6) + 1)
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(`<div class="placeholder-dice"></div>`).join('')
}

const getPercentage = (remainingHealth, maximumHealth) => {
    return (remainingHealth * 100) / maximumHealth
}


export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }