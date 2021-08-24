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

const hero = new Character({x:200,y:200}, 0, "Main Character", map1)
const purpleGem = new GameObject({x:150-32,y:150+32}, "Purple Gem", "image/objectImage/Layer 1_sprite_023.png", map1)
const redGem = new GameObject({x:400,y:100}, "Red Dragon", "image/objectImage/Layer 1_sprite_020.png", map2)

const Gems = [purpleGem, redGem]

const controller = {
    65: { pressed: false},
    87: { pressed: false},
    68: { pressed: false},
    83: { pressed: false},
    79: { pressed: false}, // o 
    80: { pressed: false}, // p (pickup)
}

// loading img to canvas and initializing game 
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

/* Floor One */ 
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

    if (keyPressed == "65" && (collision1 || collision3) && purpleGem.detectLeftSide() && redGem.detectLeftSide()){ //left 
        hero.direction = 3
        moveHero(3)
    }else if (keyPressed == "87" && (collision1 || collision2) && purpleGem.detectTopSide() && redGem.detectTopSide()){ //up
        hero.direction = 2
        moveHero(2)
    }else if (keyPressed == "68" && (collision2 || collision4) && purpleGem.detectRightSide() && redGem.detectRightSide()){ //right
        hero.direction = 1
        moveHero(1)
    }else if (keyPressed == "83" && (collision3 || collision4) && purpleGem.detectBottomSide() && redGem.detectBottomSide()){ //down
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

    
    if (keyPressed == "80"){
        if(hero.Inventory.length < 1){
            for(let gem of Gems){
                if(gem.currentMap === map1 && shouldHeroPickUp(gem)){
                    hero.pickUp(gem)
                    gem.currentMap = null
                    break
                }
            }
        }
    }else if(keyPressed == "79" ){
        Gems.forEach((gem) => {
            if(canHeroDrop(hero, gem)){
                hero.drop(gem)
                gem.currentMap = map1 
            } 
        })

    }

    if(heroOnDoor(hero)){
        hero.currentMap = map2
    }
    
    Gems.forEach((gem) => {
        if(gem.currentMap === map1){
            gem.draw(ctx)
        } 
    })

    drawFrame(spriteLoop[indexCount], hero)
 
    // recurssion
    if(hero.currentMap === map1){
        window.requestAnimationFrame(heroLoop)
    }else{
        hero.position.x -= hero.position.x
        window.requestAnimationFrame(heroLoop2)
    }
    
}

/* Floor Two */
function heroLoop2(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap(map2.map)

    const check = Object.keys(controller).filter((key) => {
        return controller[key].pressed === true
    })

    let keyPressed = check[0]

    let left = 0
    let right = 32 * scale  
    let top = 0
    let bottom = 32 * scale 

    let collision1 = detectCollision(map2 ,left + 30, top + 40) //x,y
    let collision2 = detectCollision(map2, right -20, top + 40)
    let collision3 = detectCollision(map2, left +30, bottom -10)
    let collision4 = detectCollision(map2, right -20, bottom -10)

    if (keyPressed == "65" && (collision1 || collision3) && purpleGem.detectLeftSide() && redGem.detectLeftSide()){ //left 
        hero.direction = 3
        moveHero(3)
    }else if (keyPressed == "87" && (collision1 || collision2) && purpleGem.detectTopSide() && redGem.detectTopSide()){ //up
        hero.direction = 2
        moveHero(2)
    }else if (keyPressed == "68" && (collision2 || collision4) && purpleGem.detectRightSide() && redGem.detectRightSide()){ //right
        hero.direction = 1
        moveHero(1)
    }else if (keyPressed == "83" && (collision3 || collision4) && purpleGem.detectBottomSide() && redGem.detectBottomSide()){ //down
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


    if (keyPressed == "80"){
        if(hero.Inventory.length < 1){
            for(let gem of Gems){
                if(gem.currentMap === map2 && shouldHeroPickUp(gem)){
                    hero.pickUp(gem)
                    gem.currentMap = null
                    break
                }
            }
        }
    }else if(keyPressed == "79" ){
        Gems.forEach((gem) => {
            if(canHeroDrop(hero, gem)){
                hero.drop(gem)
                gem.currentMap = map2
            } 
        })

    }

    if(heroOnDoor(hero)){
        if(hero.position.x < 0){
            hero.currentMap = map1 
        }
    }

    Gems.forEach((gem) => {
        if(gem.currentMap === map2){
            gem.draw(ctx)
        } 
    })


    drawFrame(spriteLoop[indexCount], hero)
 
    // recurssion and doorway
    if(hero.currentMap === map2){
        window.requestAnimationFrame(heroLoop2)
    }else if(hero.currentMap === map1){
        // can put a time interval here 
        hero.position.x += 718
        window.requestAnimationFrame(heroLoop)
    }
    
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


/* Function for detection */
function detectCollision({map}, spritePosX, spirtePosY){
    const gridX = Math.floor((hero.position.x + spritePosX ) / 40) //  tile width 
    const gridY = Math.floor((hero.position.y + spirtePosY )/ 40)

    if (map[gridY][gridX] === 0 || map[gridY][gridX] === 10){
        return true 
    }else{
        return false
    }
}

function detectCollisionHeroObject({position:{x,y}, currentMap}, spritePosX, spirtePosY){
    if(currentMap === hero.currentMap){
        if(Math.abs(hero.position.y + spirtePosY - y - 16) < 32 && Math.abs(hero.position.x + spritePosX - x - 16)< 32){
            return false
        }else{
            return true
        }
    }else{
        return true
    }

}

function shouldHeroPickUp({position:{x,y}}){
    // check for if statement
    if (x !== null && y !== null){
        if(Math.abs(hero.position.y + scaleWidth/2  - y )< 50 && Math.abs(hero.position.x + scaleWidth/2  - x )< 57){
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

function heroOnDoor({position:{x,y}, currentMap}){
    const gridX = Math.floor((hero.position.x + scaleWidth/2) / 40) 
    const gridY = Math.floor((hero.position.y + scaleWidth/2)/ 40)
    
    if (currentMap.map[gridY][gridX] == 10){
        return true 
    }else{
        return false
    }
    
}
