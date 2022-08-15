 let playerScore = 0
 let computerScore = 0
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const outCome = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')


function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}
    
function playRound(playerSelection, computerSelection){

    
     if (playerSelection === 'rock' && computerSelection === 'rock')
     {const p = document.createElement('p')
     p.innerText = `you tied! you both picked ${playerSelection}`
     outCome.appendChild(p)
     
   } else if(playerSelection=== 'paper' && computerSelection==='paper')
     {
      const p = document.createElement('p')
     p.innerText = `you tied! you both picked ${playerSelection}`
     outCome.appendChild(p)
   } 
      else if(playerSelection==='scissor' && computerSelection==='scissor')
     {
      const p = document.createElement('p')
      p.innerText = `you tied! you both picked ${playerSelection}`
      outCome.appendChild(p)
     } else if(playerSelection === 'rock' && computerSelection=== 'paper'){
      const p = document.createElement('p')
      p.innerText = `you lose paper covers rock`
      outCome.appendChild(p)
        computerScore++
     }else if ( playerSelection === 'paper' && computerSelection === 'rock'){
      const p = document.createElement('p')
      p.innerText = `you win! paper cover rocks`
      outCome.appendChild(p)
        playerScore++
     }else if (playerSelection === 'scissor'&& computerSelection === 'rock'){
      const p = document.createElement('p')
      p.innerText = `you lose! rock crushes scissor`
      outCome.appendChild(p) 
        computerScore++
     }else if (playerSelection === 'rock' && computerSelection==='scissor'){
      const p = document.createElement('p')
      p.innerText = `you win! rock crushes scissor`
      outCome.appendChild(p)
         playerScore++
    }
     else if ( playerSelection === 'paper' && computerSelection==='scissor'){
      const p = document.createElement('p')
      p.innerText = `you lose! scissor cut paper`
      outCome.appendChild(p) 
        computerScore++
     }else if(playerSelection==='scissor' && computerSelection==='paper'){
      const p = document.createElement('p')
      p.innerText = `you win! scissor cut paper`
      outCome.appendChild(p)
        playerScore++
     }
     
}

function checkForWinner () {
   console.log('1', playerScore, '2', computerScore)
   if(playerScore===5){
      const h2 = document.createElement('h2');
      h2.classList.add('player-won')
      h2.innerText = `you won ${playerScore} to ${computerScore} great job beating the computer`;
      outCome.appendChild(h2)

   }
   if(computerScore===5){
      const h2 = document.createElement('h2');
      h2.classList.add('computer-won')
      h2.innerText = `you lost ${playerScore} to ${computerScore} it's okay`
      outCome.appendChild(h2)
   }

}

function updateScore(playerScore,computerScore){
   playerScoreSpan.innerText = `Player Score :${playerScore}`
   computerScoreSpan.innerText= `Computer Score :${computerScore}`
}
rockButton.addEventListener('click', ()=>{
   const  computerSelection = getComputerChoice();
   const playerSelection= 'rock'
   playRound(playerSelection, computerSelection)
   updateScore(playerScore,computerScore)
   checkForWinner(playerScore,computerScore)

})
paperButton.addEventListener('click', ()=>{
   const  computerSelection = getComputerChoice();
   const playerSelection= 'paper'
   playRound(playerSelection, computerSelection)
   updateScore(playerScore,computerScore)
   checkForWinner(playerScore,computerScore)
})
scissorButton.addEventListener('click', ()=>{
   const  computerSelection = getComputerChoice();
   const playerSelection= 'scissor'
   playRound(playerSelection, computerSelection);
   updateScore(playerScore,computerScore);
   checkForWinner(playerScore,computerScore);
})



//  function game(){
//    //   for(let i = 0; i<5; i++){
//    //        
//      }
//      if(playerSelection>computerSelection){
//          console.log('You win You are a genius')
//      }else if(playerSelection<computerSelection){
//          console.log('you lose you got beat by a computer')
//      }else { console.log('its a tie')}
//  }
//  game()

