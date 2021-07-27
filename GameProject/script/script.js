// Attributes of the character 
const scale = 3
const width = 32
const height = 32
const scaleWidth = scale * width
const scaleHeight =  scale * height
const speedHero = 2
let img = new Image()
const spriteLoop = [0,1,2,3]
let indexCount = 0
let frameCount = 0

let hero = {
    position : {
        x: -20,
        y: -30,
    },
    direction: 3, // 0:down , 1:right , 2:up , 3:left 
}

const controller = {
    65: { pressed: false},
    87: { pressed: false},
    68: { pressed: false},
    83: { pressed: false},
}

// reference 
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// drawing main character
// chracter image 


// loading img to canvas
function loadImage(){
    img.src = "image/DemoRpgCharacter.png"
    img.onload = function(){
        init ()
    }   
}

loadImage()

function drawFrame(frameX, {position:{x,y},direction}){
    ctx.drawImage(img,frameX * width ,  direction * height , width , height , x , y, scaleWidth, scaleHeight) // (img src, source x, source y, source width , source height, canvas positon x,y,size x,y )
}

function init(){
    window.requestAnimationFrame(heroLoop)
}

// handling key up and key down 
function handleKeyDown(e){
    controller[e.keyCode].pressed = true
    
}

function handleKeyUP(e){
    controller[e.keyCode].pressed = false
}

// hero animation 
function heroLoop(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const check = Object.keys(controller).filter((key) => {
        return controller[key].pressed === true
    })

    let keyPressed = check[0]

    if (keyPressed == "65" ){
        hero.direction = 3
        moveHero(3)
    }else if (keyPressed == "87"){
        hero.direction = 2
        moveHero(2)
    }else if (keyPressed == "68"){
        hero.direction = 1
        moveHero(1)
    }else if (keyPressed == "83"){
        hero.direction = 0
        moveHero(0)
    }

    if (keyPressed !== undefined){
        frameCount ++
        if (frameCount >= 15){
            frameCount = 0
            indexCount++
            if(indexCount >= spriteLoop.length){
                indexCount = 0
            }
        }

    }
    
    if (keyPressed === undefined){
        indexCount = 0
    }

    drawFrame(spriteLoop[indexCount], hero)
    // recurssion
    window.requestAnimationFrame(heroLoop)
}

// move character 
function moveHero(direction){
    if(direction == 0){
        hero.position.y += speedHero
    }else if ( direction == 1){
        hero.position.x += speedHero
    }else if (direction == 2){
        hero.position.y -= speedHero
    }else{
        hero.position.x -= speedHero
    }
}

// reference on key 
document.addEventListener("keydown", handleKeyDown)
document.addEventListener("keyup", handleKeyUP)
