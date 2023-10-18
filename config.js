function openPlayerConfig(event) {
    const selectPlayerId = event.target.dataset.playerid;
    editedPlayer = selectPlayerId.toString();
    playerConfigElement.style.display = 'block';
    backDropElement.style.display = 'block'; 
}

function closePlayerConfig() {
    playerConfigElement.style.display = 'none';
    backDropElement.style.display = 'none'; 
    formElement.firstElementChild.classList.remove('error');
    errorElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorElement.textContent = 'Please enter a valid username';
        return;
    }

    const updatedPlayerElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerElement.children[1].textContent = enteredPlayername; 

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}