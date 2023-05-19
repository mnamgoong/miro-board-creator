// Button calls fetchData()
document.getElementById('button').addEventListener('click', fetchData)

// Make a fetch HTTP POST request to Google App Script
// https://script.google.com/d/1LdRcA7Ab_8q8wiX0eswch2JzcJ9ZoX0Vb0tx_8lk9CjDaoZ4pwGw7YCF/edit?usp=sharing
function fetchData() {
    const formData = {
        boardName: document.getElementById('board-name').value,
        cardTitle: document.getElementById('card-title').value,
        cardDescription: document.getElementById('card-description').value
    }

    const script = 'https://script.google.com/macros/s/AKfycbzOFbmzyDcvGXKP1C04IUKvofGo6xrLswmDUZJwvpj9CO-QiUtGnl-dE2kJajPvB2oK/exec';

    fetch(script, {
        method: 'POST',
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(response => {
           console.log(response)
           document.getElementById('result').innerHTML = `<iframe src=${response.viewLink} height="600" width="600"></iframe>`
        })
        .catch(error => {
            console.log(error);
        })
}