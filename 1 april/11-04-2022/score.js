let players = [
    { 
        name : 'JuanPablo',
        normalKill : 5,
        assist : 12,
        damage : 3200,
        healing : 0,
        streak : 4,
        envKill : 1
    },
    {
        name : 'Profx',
        normalKill : 2,
        assist : 14,
        damage : 600,
        healing : 1500,
        streak : 0,
        envKill : 0
    },
    {
        name : 'Maniofx',
        normalKill : 100,
        assist : 14,
        damage : 600,
        healing : 15000,
        streak : 0,
        envKill : 0
    }
]

let normalKill = 100;
let assist = 50;
let damage = 0.5;
let healing = 1;
let streak = 2;
let envKill = 500;

//method to find normalKill value
let getNormalKillValue = (normalKillValue) => {
    let killValue = normalKillValue * normalKill;
    return killValue;
};

//method to find assist value
let getAssistValue = (playerAssistValue) => {
    let assistValue = playerAssistValue * assist;
    return assistValue;
};

//method to find damage value
let getDamageValue = (playerDamageValue) => {
    let damageValue = playerDamageValue * damage;
    return damageValue;
};

//method to find healing value
let getHealingValue = (playerHealingValue) => {
    let healingValue = playerHealingValue *  healing ;
    return healingValue;
};

//method to find streak value
let getStreakValue = (playerStreakValue) => {
    let streakValue = Math.pow(streak, playerStreakValue);
    return streakValue;
};

//method to find envKill value
let getEnvKillValue = (playerEnvKillValue) => {
    let envKillValue = envKill * playerEnvKillValue ;
    return envKillValue;
};

//funtion to calculate score
let score = (players) =>{

    for(let playerIndex=0; playerIndex<players.length; playerIndex++){
        let player = players[playerIndex]

        let score = getNormalKillValue(player.normalKill) + getAssistValue(player.assist) + getDamageValue(player.damage) + getHealingValue(player.healing) + getStreakValue(player.streak) 
        + getEnvKillValue(player.envKill);

        player.score = score;
        
    }
    return players;
}

let playerDetails = score(players);



//function to sort players object
let sortScores = (playersDetails) => {
    playersDetails.sort((player1,player2)=>{
        return player2.score - player1.score;
    })
    return playerDetails
}

let sortedScores = sortScores(playerDetails);

// display scores function
let displayHighestScores = (sortedScores) => {
    sortedScores.map(element => {
        console.log(element.name,element.score);
    });
}
displayHighestScores(sortedScores);