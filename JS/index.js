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

document.getElementById('calculate-btn').addEventListener('click', function(){
    console.log(selectedPlayersArray.length);
    console.log('click');
})
