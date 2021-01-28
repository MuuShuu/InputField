const btn = document.getElementById('btn');
const inputField = document.getElementById('text')

btn.addEventListener('click', function() {
    const value = inputField.value
    const newElement = document.createElement('p')
    newElement.innerHTML = value
    document.body.appendChild(newElement)
    inputField.value = ''
});

const select = document.getElementById('select')

select.addEventListener('change', function(event){
    const selectColor = event.target.value
    const newElement = document.getElementById('colorNow');
    newElement.innerHTML = selectColor;
});

const box = document.getElementById('checkbox');

box.addEventListener('change', function(event){
    const check = event.target.checked
    const span = document.getElementById('span')
    if (check) {
        span.innerHTML = 'Checked'
    } else {
        span.innerHTML = 'Not checked'
    }
});