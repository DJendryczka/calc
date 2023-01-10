const numberButtons = document.querySelectorAll('.number')


numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        console.log('Klicked!')
    })
})