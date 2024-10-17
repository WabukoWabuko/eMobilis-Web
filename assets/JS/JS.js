const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', ()=>{
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'Blue' ? 'Red': 'Blue';
})