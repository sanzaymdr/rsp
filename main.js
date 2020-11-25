let userChosen
let computerChosen
var result = results();
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const randomNumber = Math.round(Math.random() * (3))
const possibleChoices = document.querySelectorAll('.choices')

possibleChoices.forEach(possibleChoice=>
    possibleChoice.addEventListener('click',e=>{
        userChosen = e.target.id
        console.log(userChosen)
        generatedComputerChoice()
        results()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        console.log(randomNumber)
        displayResult.innerHTML = result

    }))


function generatedComputerChoice(){
    if(randomNumber === 1| randomNumber === 0){
        return computerChosen = 'scissors'
        
    }
    else if(randomNumber  ===  2){
        return computerChosen='paper';   
    }
    else if(randomNumber  ===  3){
        return computerChosen ='rock';
    }

}
//
function results(){
    if(computerChosen === userChosen){
        return result = 'There was a tie';
    }
    else if(computerChosen === 'scissors' && userChosen === 'rock'){
     return result = 'you win';   
    }
    else if(computerChosen === 'scissors' && userChosen === 'paper'){
     return result = 'you loose';   
    }
    else if(computerChosen === 'paper' && userChosen === 'scissors'){
     return result = 'you win';   
    }
    else if(computerChosen === 'paper' && userChosen === 'rock'){
     return result = 'you loose';   
    }
    else if(computerChosen === 'rock' && userChosen === 'paper'){
     return result = 'you win';   
    }
    else if(computerChosen === 'rock' && userChosen === 'scissors'){
     return result = 'you loose';   
    }
}
