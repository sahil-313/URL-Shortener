const shortBTN = document.getElementById('shortBTN');
const resetBTN = document.getElementById('resetBTN');

shortBTN.addEventListener('click', shortenURL);
resetBTN.addEventListener('click', reset)

function shortenURL()
{
    var ogURL = document.getElementById('originalURL').value;
    var apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(ogURL);
    shortURLarea = document.getElementById('shortURL');

    fetch(apiURL).then(response => response.text()).then(data => {
        shortURLarea.value = data;
    }).catch(error =>{
        shortURLarea.value = 'The entered URL cannot be converted to a shorter form :(';
    });
}

function reset()
{
    location.reload();
}