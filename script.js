

function start(){
    document.querySelector('#start').addEventListener('click',function(){
        
        makeBubble();
        timeStamp();
        hitValue();
        incScore();
    })
    
    

}




function makeBubble(){
        var c='';

    for(let i=1;i<=126;i++){
        num=Math.floor(Math.random()*10)
        c+=`<div class="bub">${num}</div>`
    }
    document.querySelector('#Bubble').innerHTML=c;

    
}
var timer=60
function timeStamp(){
    var timeInterval=setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;

        }
        else{
            clearInterval(timeInterval);
            

            document.querySelector('#Bubble').textContent='Game Over Play Again!' +'Your Score is '+score+' '
            showGameOver()

            hit=0;
            score=0;
            document.querySelector('#Score').textContent=score;
            timer=60;

        }

    },1000)

}
function showGameOver() {
    
    createFallingFlowers();
    
   
    const gameOverMessage = document.createElement('div');
    gameOverMessage.classList.add('game-over-message');
    gameOverMessage.innerHTML = '🎉 Game Over! 🎉 <br> Your Score: ' + score;
    document.body.appendChild(gameOverMessage);
    
    setTimeout(() => {
        gameOverMessage.remove();  
    }, 5000);  
}


function createFallingFlowers() {
    const flowerContainer = document.createElement('div');
    flowerContainer.classList.add('flower-container');
    document.body.appendChild(flowerContainer);

    for (let i = 0; i < 50; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDelay = `${Math.random() * 2}s`;  
        flowerContainer.appendChild(flower);
    }

    setTimeout(() => {
        flowerContainer.remove();  
    }, 10000);  
}

var hit=0;
function hitValue(){
    hit=Math.floor(Math.random()*10);

    document.querySelector('#HIT').textContent=hit;

    

}
var score=0
function incScore(){
    document.querySelector("#Bubble").addEventListener('click',function(details){
        clickedValue = Number(details.target.textContent);
        console.log(clickedValue);
        
        if (hit===clickedValue){
            score+=10;
            document.querySelector('#Score').textContent=score;
            hitValue();
            makeBubble();


        }
        


        
    })

    
    
}

start();