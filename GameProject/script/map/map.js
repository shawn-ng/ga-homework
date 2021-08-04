function drawMap(mapArray){

    
    let floor = new Image()
    let wall1 = new Image()
    let wall2 = new Image()
    let wall3 = new Image()
    let wall4 = new Image()
    let wall5 = new Image()
    let wall6 = new Image()
    let wall7 = new Image()
    let wall8 = new Image()
    let wall9 = new Image() // shadow
    let machine11 = new Image()
    let machine12Back = new Image()
    
    wall1.src = "image/scifitiles-sheet copy/Layer 1_sprite_07.png"
    wall2.src = "image/scifitiles-sheet copy/Layer 1_sprite_06.png"
    wall3.src = "image/scifitiles-sheet copy/Layer 1_sprite_08.png"
    wall4.src = "image/scifitiles-sheet copy/Layer 1_sprite_34.png"
    wall5.src = "image/scifitiles-sheet copy/Layer 1_sprite_35.png"
    wall6.src = "image/scifitiles-sheet copy/Layer 1_sprite_36.png"
    wall7.src = "image/scifitiles-sheet copy/Layer 1_sprite_20.png"
    wall8.src = "image/scifitiles-sheet copy/Layer 1_sprite_22.png"
    wall9.src = "image/scifitiles-sheet copy/Layer 1_sprite_17.png"
    floor.src = "image/scifitiles-sheet copy/Layer 1_sprite_21.png"
    machine11.src = "image/scifitiles-sheet copy/Layer 1_sprite_45.png"
    machine12Back.src = "image/scifitiles-sheet copy/Layer 1_sprite_31.png"

    const tileW = 40
    const tileH = 40
    
    let postX = 0
    let postY = 0

    for(let i = 0 ; i < mapArray.length; i++){
        for( let j = 0 ; j < mapArray[i].length ; j ++){
            if (mapArray[i][j] == 1){
                ctx.drawImage(wall1, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 2){
                ctx.drawImage(wall2, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 3){
                ctx.drawImage(wall3, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 4){
                ctx.drawImage(wall4, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 5){
                ctx.drawImage(wall5, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 6){
                ctx.drawImage(wall6, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 7){
                ctx.drawImage(wall7, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 8){
                ctx.drawImage(wall8, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 9){
                ctx.drawImage(wall9, postX, postY, tileW, tileH)

            }
            if (mapArray[i][j] == 0){
                ctx.drawImage(floor, postX, postY , tileW, tileH)
            }
            if (mapArray[i][j] == 11){
                ctx.drawImage(machine11, postX, postY, tileW, tileH)
            }
            if (mapArray[i][j] == 12){
                ctx.drawImage(machine12Back, postX, postY, tileW, tileH)
            }
            postX += tileW
            
        }
        postX = 0
        postY += tileH

    }
}
