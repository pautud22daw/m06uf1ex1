window.onload = function(){
  cU = 0;
  cS = 0;

  while(1){
    let opS = getRndInteger(1,3);
    let opU = prompt('Rock, paper or scissors? ').toLowerCase();
    
    if(['rock','paper','scissors'].includes(opU)){
      switch(opS){
        case 1:
          console.log('System selected Rock!');
          if(opU === 'rock') console.log('You lose...',++cS);
          else if(opU === 'paper') console.log('You win!',++cU);
          else console.log('You lose...',++cS);
          break;
        case 2:
          console.log('System selected Paper!');
          if(opU === 'rock') console.log('You lose...',++cS);
          else if(opU === 'paper') console.log('You lose...',++cS);
          else console.log('You win!',++cU);
          break;
        case 3:
          console.log('System selected Scissors!');
          if(opU === 'rock') console.log('You win!',++cU);
          else if(opU === 'paper') console.log('You lose...',++cS);
          else console.log('You lose...',++cS);
      }
    }else console.log('Has perdut el joc.');
    console.log(`User wins: ${cU}, System wins ${cS}`);
  }

  function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

}
