console.log("welcoimne to tic tasc towe")


let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");


let turn = "X"
let realGameOver = false

// function to change the turn 

function changeTurn() {
    return turn === "X" ? "0" : "X"; 
}

//  function to check for a win 

function checkWin(){
let boxtext =document.getElementsByClassName('boxtext')

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

music.play()
    wins.forEach((ele)=> {
        if((boxtext[ele[0]].innerHTML === boxtext[ele[1]].innerHTML) && (boxtext[ele[1]].innerHTML === boxtext[ele[2]].innerHTML) && (boxtext[ele[0]].innerHTML !== "")){
            document.querySelector(".info").innerHTML = boxtext[ele[0]].innerHTML + " Won the Game";
            realGameOver =true
            document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "500px"
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((ele) => {
    let boxtext = ele.querySelector('.boxtext')
    ele.addEventListener('click',()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn
            turn =changeTurn()
            audioTurn.play()
            checkWin()
            if(!realGameOver){
                 document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
           
        }
    })
})





// resert btn 


reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext')
    boxtext.forEach((ele) =>{
        ele.innerHTML = ''
    })

    turn = "X"
    realGameOver = false
   
        document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
        document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0px"
   
})