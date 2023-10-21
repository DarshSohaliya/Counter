let count = 0

const countElement = document.getElementById('counter')
const bu1 = document.getElementById('b1')
const bu2 = document.getElementById('b2')
const bu3 = document.getElementById('b3')

bu1.addEventListener('click' , () =>{
    count++
    countElement.innerText=count
})
bu2.addEventListener('click' , () =>{
    count--
    countElement.innerText=count
})
bu3.addEventListener('click' , () =>{
    count = 0
    countElement.innerText=count
})
    
    
       