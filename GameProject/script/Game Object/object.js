class GameObject{
    constructor (position, label, spriteImg, map){
        this.position = position 
        this.label = label
        this.spriteImg = spriteImg
        this.currentMap = map
    }

    draw(context){
        if(this.position !== null){
            this.object = new Image()
            this.object.src = this.spriteImg
            context.drawImage(this.object, this.position.x, this.position.y,32,32)
        }
    }

    detectLeftSide(){
        return (detectCollisionHeroObject(this , 30,40) || detectCollisionHeroObject(this,30,70))
    }

    detectTopSide(){
        return (detectCollisionHeroObject(this , 30,40) || detectCollisionHeroObject(this,60,40))
    }

    detectRightSide(){
        return (detectCollisionHeroObject(this , 60,40) || detectCollisionHeroObject(this,60,70))
    }

    detectBottomSide(){
        return (detectCollisionHeroObject(this , 30,70) || detectCollisionHeroObject(this,60,70))
    }
}

class Character{
    constructor (position,direction,label,mapLevel){
        this.position = position 
        this.direction = direction
        this.label = label
        this.Inventory = []
        this.currentMap = mapLevel
    }

    pickUp(gameObject){
        this.Inventory.push(gameObject)
        gameObject.position.y = -100
        gameObject.position.x = -100
    }

    drop(gameObject){
        this.Inventory = this.Inventory.filter((item) => {
            return item !== gameObject
        })
        if(this.direction == 0){
            gameObject.position.x = this.position.x + scaleWidth/2 - 24/2
            gameObject.position.y = this.position.y + scaleHeight - 24/2
        }else if(this.direction == 1){
            gameObject.position.x = this.position.x + scaleWidth/2 + 32/4
            gameObject.position.y = this.position.y + scaleHeight/2 + 32/4
        }else if(this.direction == 2){
            gameObject.position.x = this.position.x + scaleWidth/2 - 32/2
            gameObject.position.y = this.position.y 
        }else if(this.direction == 3){
            gameObject.position.x = this.position.x 
            gameObject.position.y = this.position.y + scaleHeight/2 + 32/4
        }
    }
}

class Map{
    constructor(col,row,map){
        this.col = col
        this.row = row
        this.map = map
    }
}