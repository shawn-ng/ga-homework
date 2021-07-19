const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')

// how many pixel it will move by 
const initialDirection = [1,-1]
let speedx = 2 * initialDirection[Math.floor(Math.random() * initialDirection.length)]
let speedy = 2 * initialDirection[Math.floor(Math.random() * initialDirection.length)]

// drawing paddle 
context.fillStyle = "white"

function drawPaddles({X1,X2}){
    context.fillRect(X1, 20, 100, 10) // player 1
    context.fillRect(X2, 570 , 100, 10) // player 2
}
let playerPaddleX = {X1:250,X2:250}
// drawing Ball
function drawBall({position:{x,y},size}){
    context.beginPath()
    context.arc(x, y, size , 0 , 2 * Math.PI)
    context.fill()
    context.closePath()
}

// dictionary of the ball
const ball = {
    position: {
        x : null,
        y : null,
    },
    angle: null,
    size : 5,
}

// setting initial position 
function initialPosition(){
    ball.position = {x:300 , y:300}
}

// function to handle movement 
function newPositionofBall(){
    ball.position.x += speedx  
    ball.position.y += speedy 
}

// collision and change of direction 
function checkRange2(array){
    return Boolean(ball.position.x + speedx> array[0] && ball.position.x + speedx < array[1] && ball.position.y >= 570)
}
function checkRange1(array){
    return Boolean(ball.position.x + speedx> array[0] && ball.position.x + speedx < array[1] && ball.position.y <= 30 )
}

function collision(){

    const paddleRange1 = [playerPaddleX.X1, playerPaddleX.X1+100]
    const paddleRange2 = [playerPaddleX.X2, playerPaddleX.X2+100]
  
    if(ball.position.x + speedx > canvas.width-ball.size || ball.position.x + speedx < ball.size) {
        
        speedx = -speedx
    }
    if( checkRange2(paddleRange2) || checkRange1(paddleRange1)) {
        speedy = -speedy
   
    }
    if(ball.position.y + speedy > 590 || ball.position.y + speedy < 20){
        alert("you LOSE")
    }
}


// handling key and the paddle 
const player1 = {
    moveLeft: function(){
        if(playerPaddleX.X1 === 0){
            playerPaddleX.X1 = playerPaddleX.X1
        }else{
            playerPaddleX.X1 -= 10
        }
    },
    moveRight: function(){
        if(playerPaddleX.X1 === canvas.width - 100 ){
            playerPaddleX.X1 = playerPaddleX.X1
        }else{
            playerPaddleX.X1 += 10
        }
    },
}
const player2 = {
    moveLeft: function(){
        if(playerPaddleX.X2 === 0 ){
            playerPaddleX.X2 = playerPaddleX.X2
        }else{
            playerPaddleX.X2 -= 10
        }
    },
    moveRight: function(){
        if(playerPaddleX.X2 === canvas.width -100 ){
            playerPaddleX.X2 = playerPaddleX.X2
        }else{
            playerPaddleX.X2 += 10
        }
    },
}
const controller = {
    KeyA: {pressed: false, func: player1.moveLeft}, // player 1 left
    KeyD: {pressed: false, func: player1.moveRight}, // player 1 right
    ArrowLeft: {pressed: false, func: player2.moveLeft}, // player 2 left
    ArrowRight: {pressed: false, func: player2.moveRight}, // player 2 right
}

document.addEventListener("keydown", function(e){
    console.log(e.code)
    if(controller[e.code]){
        controller[e.code].pressed = true
    }
})

document.addEventListener("keyup", function(e){
    
    if(controller[e.code]){
        controller[e.code].pressed = false
    }
})

const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
}



// executing
function test(){
    context.clearRect(0,0,600,600)
    executeMoves()
    newPositionofBall()
    drawBall(ball)
    drawPaddles(playerPaddleX)
    collision()
    setTimeout(test, 15)
}

// handle 
initialPosition()
test()


