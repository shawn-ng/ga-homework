class GameObject{
    constructor (position, label, spriteImg){
        this.position = position 
        this.label = label
        this.spriteImg = spriteImg
    }

    draw(context){
        if(this.position !== null){
            this.object = new Image()
            this.object.src = this.spriteImg
            context.drawImage(this.object, this.position.x, this.position.y,32,32)
        }
    }

}

class Character{
    constructor (position,direction,label){
        this.position = position 
        this.direction = direction
        this.label = label
        this.Inventory = []
    }

    pickUp(gameObject){
        this.Inventory.push(gameObject)
        gameObject.position.y = -100
        gameObject.position.x = -100
    }

    drop(gameObject,direction){
        this.Inventory = this.Inventory.filter((item) => {
            return item !== gameObject
        })
        if(this.direction == 0){
            gameObject.position.x = this.position.x + scaleWidth/2 - 32/2
            gameObject.position.y = this.position.y + scaleHeight - 32/2
        }else if(this.direction == 1){
            gameObject.position.x = this.position.x + scaleWidth/2
            gameObject.position.y = this.position.y + scaleHeight/2 - 32/2
        }else if(this.direction == 2){
            gameObject.position.x = this.position.x + scaleWidth/2 - 32/2
            gameObject.position.y = this.position.y 
        }else if(this.direction == 3){
            gameObject.position.x = this.position.x 
            gameObject.position.y = this.position.y + scaleHeight/2 - 32/2
        }
        // gameObject.position.x = this.position.x 
        // gameObject.position.y = this.position.y 
    }
}

class Map{

}