let aC = [0,0,0];
let aT = ['','',''];
let aR = [1,''];

window.onload = function() {

    document.getElementById('btnS').onclick = function() {
        aR[0] = getRndInteger(1,3);
        aR[1] = document.getElementById('r1').value;

        switch(aR[0]){
            case 1:
                aT[1]='System selected Rock!';
                if(aR[1] === 'rock'){
                    aT[2]='Draw.';
                    aC[2]++;
                } else if(aR[1] === 'paper') {
                    aT[2]='You win!';
                    aC[1]++;
                } else if(aR[1] === 'scissors'){
                    aT[2]='You lose...';
                    aC[0]++;
                } else{
                    aT[2]='You lose...';
                    aC[0]++;
                } 
                break;
            case 2:
                aT[1]='System selected Paper!';
                if(aR[1] === 'rock'){
                    aT[2]='You lose...';
                    aC[0]++;
                } else if(aR[1] === 'paper') {
                    aT[2]='Draw.';
                    aC[2]++;
                } else if(aR[1] === 'scissors'){
                    aT[2]='You win!';
                    aC[1]++;
                } else{
                    aT[2]='You lose...';
                    aC[0]++;
                } 
                break;
            case 3:
                aT[1]='System selected Scissor!';
                if(aR[1] === 'rock'){
                    aT[2]='You win!';
                    aC[1]++;
                } else if(aR[1] === 'paper') {
                    aT[2]='You lose...';
                    aC[0]++;
                } else if(aR[1] === 'scissors'){
                    aT[2]='Draw.';
                    aC[2]++;
                }else{
                    aT[2]='You lose...';
                    aC[0]++;
                } 
        }
        document.getElementById('exit1').innerHTML=`<b>User: ${aC[1]} | System: ${aC[0]} | Draws: ${aC[2]}</b>`;
        document.getElementById('exit2').innerHTML=`<b>${aT[1]}</b>`;
        setTimeout(500);
        document.getElementById('exit3').innerHTML=`<b>${aT[2]}</b>`;
    }

    document.getElementById('btnR').onclick = function() {
        cU = 0;
        cS = 0;
        document.getElementById('exit1').innerHTML='<b>User: 0 | System: 0</b>';
        document.getElementById('exit2').innerHTML='';
        document.getElementById('exit3').innerHTML='';
        document.getElementById('r1').value = '';
    }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}  
  