let timer=''
let playerScore=0
let timerSeconds=0
let timerMinutes=0

document.querySelector(".play").addEventListener('click', playClicked)


function playClicked() {
    document.querySelector(".play").style.display='none'
    
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();    
    
    document.querySelector(".timer").style.display = 'inline-block'
    document.querySelector(".score").style.display = 'inline-block'

    document.querySelectorAll("img").forEach(function(ghost) {
        ghost.style.display = 'initial'
    }
    )
    document.querySelector("img.busted").style.display = 'none'
    
    document.querySelectorAll("img").forEach(function(ghost) {
        ghost.addEventListener('click', ghostClicked)
    })

    {
        
        setInterval(function() {        
            if(timerMinutes === 0 && timerSeconds === 0)
            {
                timerSeconds+=1;
            }
            else if (timerSeconds%59 === 0){
                timerSeconds = 0
                timerMinutes+=1
            }
            timerSeconds+=1
            
            document.querySelector(".timer").innerHTML = `Time: ${timerMinutes} min : ${timerSeconds} sec`
        }, 1000);
    }
}


function ghostClicked(event) {
    event.target.removeEventListener('click', ghostClicked)
    playerScore+=1
    document.querySelector(".score").innerHTML = playerScore
    event.target.setAttribute("src","./public/images/busted.png")
    event.target.style.webkitAnimationPlayState='paused'
    setTimeout(function() {
        event.target.style.display = 'none'
    }, 3000)
    
    if (playerScore===10)
    {
        document.querySelector('.timer').style.display = 'none'
        document.querySelector('.score').style.display = 'none'
        //document.querySelector(".music").style.display='none'
        document.querySelector(".gameOver").style.display='inline-block'
        document.querySelector(".gameOver").innerHTML = `Congrats!!! You killed all the 10 ghosts in ${timerMinutes} min and ${timerSeconds} sec`
    }  
}