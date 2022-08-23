const selectedPlayersArray = [];

function addPlayer(players){
    const playerName = players.parentNode.parentNode.children[0].innerText;
    selectedPlayersArray.push(playerName);

    if(selectedPlayersArray.length <= 5){
        const selectedPlayers = document.getElementById('selected-players');
        const playerNameList = document.createElement('li');
        playerNameList.innerText = playerName;
        selectedPlayers.appendChild(playerNameList);
        players.disabled = true;
   }
   else {
        alert('Limits Up');
        selectedPlayersArray.pop();
   }

}

function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const totalInputValue = parseFloat(inputValueString);
    if(isNaN(totalInputValue)){
        alert('Please enter a valid value!');
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
    if(isNaN(value)){
    }
    else {
        textField.innerText = value;
    }
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumber = selectedPlayersArray.length;
    const perPlayerTotal = getInputValueById('per-player');

    const playersExpenses = playerNumber * perPlayerTotal;
    setTextFieldById('players-expenses', playersExpenses);

})

document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const playerExpenses = getTextFieldById('players-expenses');
    const manegerSalary = getInputValueById('manager-salary');
    const coachSalary = getInputValueById('coach-salary');

    const totalExpenses = playerExpenses + manegerSalary + coachSalary;
    setTextFieldById('total-expenses', totalExpenses);
})
