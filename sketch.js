
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImg1=loadAnimation("images/tomOne.png")
    jerryImg=loadAnimation("images/jerryThree.png","images/jerryTwo.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tomSitting",tomImg1)
tom.scale=0.2
jerry=createSprite(200,600)
jerry.addAnimation("annoyingjerry",jerryImg)
jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
