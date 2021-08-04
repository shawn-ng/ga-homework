// reference 
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// Attributes of the character 
const scale = 2.5
const width = 32
const height = 32
const scaleWidth =  width * scale
const scaleHeight =  height * scale
const speedHero = 2
let img = new Image()
const spriteLoop = [0,1,2,3]
let indexCount = 0
let frameCount = 0

const hero = new Character({x:0,y:0}, 0, "Main Character")
const strawberry = new GameObject({x:150-32,y:150+32}, "strawberry", "image/kisspng-pixel-art-strawberry-cream-cake-donuts-pixelated-clipart-5b3b47bf5847e1.8219201415306116473616.jpg")

const controller = {
    65: { pressed: false},
    87: { pressed: false},
    68: { pressed: false},
    83: { pressed: false},
    79: { pressed: false}, // o 
    80: { pressed: false}, // p (pickup)
}

// drawing main character

// loading img to canvas
function loadImage(){
    img.src = "image/DemoRpgCharacter.png"
    img.onload = function(){
        init ()
    }   
}

loadImage()

function init(){
    window.requestAnimationFrame(heroLoop)
}

function drawFrame(frameX, {position:{x,y},direction}){
    ctx.drawImage(img,frameX * width ,  direction * height , width , height , x , y , scaleWidth, scaleHeight) // (img src, source x, source y, source width , source height, canvas positon x,y,size x,y )
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

    drawMap(map1.map)

    const check = Object.keys(controller).filter((key) => {
        return controller[key].pressed === true
    })

    let keyPressed = check[0]

    let left = 0
    let right = 32 * scale  
    let top = 0
    let bottom = 32 * scale 

    let collision1 = detectCollision(map1 ,left + 30, top + 40) //x,y
    let collision2 = detectCollision(map1, right -20, top + 40)
    let collision3 = detectCollision(map1, left +30, bottom -10)
    let collision4 = detectCollision(map1, right -20, bottom -10)
    let collisionObject1 = detectCollisionHeroObject(strawberry, left + 30, top + 40) //top left
    let collisionObject2 = detectCollisionHeroObject(strawberry, right -20, top + 40) // top right
    let collisionObject3 = detectCollisionHeroObject(strawberry, left +30, bottom -10) // bottom left
    let collisionObject4 = detectCollisionHeroObject(strawberry, right -20, bottom -10) // bottom right
    
    if (keyPressed == "65" && (collision1 || collision3) && (collisionObject1 || collisionObject3)){ //left 
        hero.direction = 3
        moveHero(3)
    }else if (keyPressed == "87" && (collision1 || collision2) && (collisionObject1 || collisionObject2)){ //up
        hero.direction = 2
        moveHero(2)
    }else if (keyPressed == "68" && (collision2 || collision4) && (collisionObject2 || collisionObject4)){ //right
        hero.direction = 1
        moveHero(1)
    }else if (keyPressed == "83" && (collision3 || collision4) && (collisionObject3 || collisionObject4)){ //down
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


    if (shouldHeroPickUp(strawberry) && keyPressed == "80"){
        hero.pickUp(strawberry)
    }else if(keyPressed == "79" && canHeroDrop(hero, strawberry)){
        hero.drop(strawberry)
    }

    strawberry.draw(ctx)
    
    ctx.fillStyle = "red"
    ctx.fillRect(strawberry.position.x + 16 , strawberry.position.y + 16,3,3)


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


/* Map */

let map1 =  {
    col : 20,

    row : 10,

    map : [
    [2,1,1,1,1,11,1,11,1,11,1,1,1,3],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,3],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]],
}

// note to take: i need to know what is my relative position of my hero 
function detectCollision({map}, spritePosX, spirtePosY){
    const gridX = Math.floor((hero.position.x + spritePosX ) / 40) //  tile width 
    const gridY = Math.floor((hero.position.y + spirtePosY )/ 40)

    if (map[gridY][gridX] === 0 || map[gridY][gridX] === 10){
        return true 
    }else{
        return false
    }
}

function detectCollisionHeroObject({position:{x,y}}, spritePosX, spirtePosY){
    if(Math.abs(hero.position.y + spirtePosY - y - 16) < 30 && Math.abs(hero.position.x + spritePosX - x - 16)< 30){
        return false
    }else{
        return true
    }
}

function shouldHeroPickUp({position:{x,y}}){
    // check for if statement
    if (x !== null && y !== null){

        if(hero.position.y - y < 10 && hero.position.x - x < 10){
            return true
        }else{
            return false
        }
    }else{
        return false 
    }
}

function canHeroDrop({Inventory}, object){
    const check = Inventory.filter((item) => {
        return item == object
    })

    return Boolean(check.length)
}

