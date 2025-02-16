console.log("welcoimne to tic tasc towe")


let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");


let turn = "X"
let realGameOver = false
 showData()
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

function showData(){
   let main =document.getElementById("main")

   main.innerHTML = ''

  
     main.innerHTML = `    <div class="col box-height  text-center ">
                <div class="row row-cols-3  h-100">
                    <div class="col p-0 ">
                        <div class="box border-top-0 border-start-0 d-flex justify-content-center align-items-center ">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-top-0 ">
                            <span class="boxtext "></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-top-0 border-end-0">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-start-0">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 " >
                        <div class="box d-flex justify-content-center align-items-center border-end-0">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-bottom-0 border-start-0 ">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-bottom-0 ">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                    <div class="col p-0 ">
                        <div class="box d-flex justify-content-center align-items-center border-bottom-0 border-end-0">
                            <span class="boxtext"></span>
                        </div>
                    </div>
                </div>
           </div>
           
           <div class="col  ">
                <h1>Welcome To 'Tic Tac Toe'</h1>
                <div class="my-3">
                    <span class="info ">
                        <h5 class="text-success">Turn For X </h5>
                    </span>    
                       <!-- From Uiverse.io by andrew-demchenk0 --> 
<button class="button my-3 reset"  id="reset"  type="button">
    <span class="button__text">Reset</span>
    <span class="button__icon"><svg class="svg" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><line style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" x1="80" x2="432" y1="112" y2="112"></line><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><line style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" x1="256" x2="256" y1="176" y2="400"></line><line style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" x1="184" x2="192" y1="176" y2="400"></line><line style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" x1="328" x2="320" y1="176" y2="400"></line></svg></span>
  </button>
                </div>
                <div class="img-box     my-3">
                    <img src="200W.gif" class="img-fluid ">
                </div>
           </div>`
   
}