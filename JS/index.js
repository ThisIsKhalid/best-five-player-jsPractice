const selectedPlayersArray = [];

function addPlayer(players){
    // console.log(players.parentNode.parentNode.children[0].innerText);
    const playerName = players.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);
    selectedPlayersArray.push(playerName);

    const selectedPlayers = document.getElementById('selected-players');
    const playerNameList = document.createElement('li');
    playerNameList.innerText = playerName;
    selectedPlayers.appendChild(playerNameList);

   
   
   console.log(selectedPlayersArray);
    

    players.disabled = true;

}