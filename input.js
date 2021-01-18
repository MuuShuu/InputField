const btn = document.getElementById('btn');
const inputField = document.getElementById('text')

btn.addEventListener('click', function() {
    const value = inputField.value
    const newElement = document.createElement('p')
    newElement.innerHTML = value
    document.body.appendChild(newElement)
    inputField.value = ''
});