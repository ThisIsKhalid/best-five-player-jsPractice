const selectedPlayersArray = [];

function addPlayer(players){
    // console.log(players.parentNode.parentNode.children[0].innerText);
    const playerName = players.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);
    selectedPlayersArray.push(playerName);

    // const selectedPlayers = document.getElementById('selected-players');
    // const playerNameList = document.createElement('li');
    // playerNameList.innerText = playerName;
    // selectedPlayers.appendChild(playerNameList);

    if(selectedPlayersArray.length <= 5){
        const selectedPlayers = document.getElementById('selected-players');
        const playerNameList = document.createElement('li');
        playerNameList.innerText = playerName;
        selectedPlayers.appendChild(playerNameList);
        players.disabled = true;
   }
   else {
        alert('Limit Finish');
        selectedPlayersArray.pop();
   }

}

function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const totalInputValue = parseFloat(inputValueString);
    if(isNaN(totalInputValue)){
        alert('Please enter a valid value!')
    }
    else {
        return totalInputValue;
    }
}

function getTextFieldById(textId){
    const textField = document.getElementById(textId);
    const textFieldString = textField.innerText;
    const totalTextField = parseFloat(textFieldString);
    return totalTextField;
}

function setTextFieldById(textId, value){
    const textField = document.getElementById(textId); 
    textField.innerText = value;
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumber = selectedPlayersArray.length;
    // const perPlayer = document.getElementById('per-player');
    // const perPlayerString = perPlayer.value;
    // const perPlayerTotal = parseFloat(perPlayerString);
    const perPlayerTotal = getInputValueById('per-player');

    const playersExpenses = playerNumber * perPlayerTotal;
    setTextFieldById('players-expenses', playersExpenses);
    console.log(playersExpenses);
    
    // const playerExpenses = getTextFieldById('player-expenses');

})
