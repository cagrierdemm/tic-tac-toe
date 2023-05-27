var gameTurn = document.getElementById("gameTurn");
var cell = document.querySelectorAll(".cell");
var btn = document.getElementById("btn");

var gameActive = true;
var numOfSteps = 0;
var currentplayer = "X";
var gameStatus = ["","","","","","","","",""];
gameTurn.innerHTML = `Player ${currentplayer}'s turn`;

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

cell.forEach(e => {
    e.addEventListener("click", function(){
        var currentIndex = e.getAttribute("data-cell-index");
        if(e.innerHTML=="" && gameActive){
            e.innerHTML = currentplayer;
            gameStatus[currentIndex] = currentplayer;
            currentplayer == "X" ? currentplayer = "O" : currentplayer = "X";
            gameTurn.innerHTML = `Player ${currentplayer}'s turn`;
            numOfSteps++;
        }     

        for(var i=0;i<8;i++){
            const winCondition = winConditions [i];
            var a = gameStatus[winCondition[0]];
            var b = gameStatus[winCondition[1]];
            var c = gameStatus[winCondition[2]];
            if(a == "" || b=="" || c==""){
                continue;
            }
            
            if(a == b && b == c){
                gameTurn.innerHTML = `Player ${a} win!`;
                gameActive = false;
                break;
            }

        }
        if(numOfSteps == 9){
            gameActive = false;
            gameTurn.innerHTML = `Draw!`;
        }
       
        
    })
    
})

function restartGame(){
    cell.forEach(e => {
        e.innerHTML = "";
        currentplayer = "X";
        gameTurn.innerHTML = `Player ${currentplayer}'s turn`;
        gameStatus = ["","","","","","","","",""];
        gameActive = true;
    })
    
}
