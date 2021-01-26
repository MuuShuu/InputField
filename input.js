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

select.addEventListener('change', function(){
    const selectColor = select.options[select.selectedIndex].value
    const newElement = document.getElementById('colorNow');
    newElement.innerHTML = selectColor;
});