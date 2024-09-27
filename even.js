const readline = require('readline')


const rl = readline.createInterface({
    input:process.stdin
})

let userInput = []

rl.on('line',(input)=>{
    userInput.push(input)
    console.log(userInput)
});


rl.on('close',()=>{

        const number = Number(userInput[0])
        

            const reminder = number % 2
            if(reminder ===0){
                console.log('even number')
            }else {
                console.log('odd number')
            }
})