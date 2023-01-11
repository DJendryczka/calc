const screen = document.querySelector('.input')
const buttons = document.querySelectorAll('button')
const deleteButton = document.querySelector('.delete')
console.log(buttons)

buttons.forEach(button => button.addEventListener('click', () => calc(button)))

function calc(button){
    const value = button.textContent
    screen.textContent += value
}

deleteButton.addEventListener('click', ()=>{
    console.log('Klik')
    screen.textContent = ' '
})




// Old disaster code:(
// const numberButtons = document.querySelectorAll('.number')
// let input = document.querySelector('.upper')
// let inputLower = document.querySelector('.lower')
// let firstValue
// let secoundValue
// let value
// const deleteButton = document.querySelector('.delete')
// const addButton = document.querySelector('.add')
// const resultButton = document.querySelector('.result')

// resultButton.addEventListener('click', ()=>{
//     console.log(firstValue)
//     secoundValue = value
//     console.log(secoundValue)
// })

// deleteButton.addEventListener('click', ()=>{
//     value = inputLower.innerHTML = ' '
// })
// addButton.addEventListener('click', ()=>{
//     input.innerHTML = value + ' + '
//     firstValue = value
//     value = inputLower.innerHTML = ' '

// })

// numberButtons.forEach(button =>{
//     button.addEventListener('click', () =>{
//         let inputValue = button.innerText
//         value = inputLower.innerHTML += inputValue
//     })
// })