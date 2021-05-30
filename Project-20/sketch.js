
var tom;
var jerry;
var garden;

var jerryAnim, tomAnim;
var jerryImg1, tomImg1;
var jerryImg2, tomImg2;

var gardenImage;

function preload() {
    jerryAnim = loadAnimation("jerryTwo.png", "jerryThree.png");
    jerryImg1 = loadAnimation("jerryOne.png");
    jerryImg2 = loadAnimation("jerryFour.png");

    tomAnim = loadAnimation("tomTwo.png", "tomThree.png");
    tomImg1 = loadAnimation("tomOne.png");
    tomImg2 = loadAnimation("tomFour.png");

    gardenImage = loadImage("garden.png");
}


function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500, 400, 20, 20);
    garden.addImage("stable", gardenImage);

    jerry = createSprite(180, 600, 20, 20);
    jerry.scale = 0.15;
    jerry.addAnimation("movingJ", jerryAnim);
    jerry.addAnimation("startJ", jerryImg1);
    jerry.addAnimation("endJ", jerryImg2);

    tom = createSprite(750, 600, 20 ,20);
    tom.scale = 0.3;
    tom.addAnimation("movingT", tomAnim);
    tom.addAnimation("startT", tomImg1);
    tom.addAnimation("endT", tomImg2);
}


function draw() {
    background("white");

    tom.changeAnimation("startT", tomImg1);
    tom.scale = 0.2;

    jerry.changeAnimation("startJ", jerryImg1);
    jerry.scale = 0.15;

    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width) / 2) {
        tom.changeAnimation("endT", tomImg2);
        tom.changeAnimation("endT");
        tom.velocityX = 0;

        jerry.changeAnimation("endJ", jerryImg2);
        jerry.changeAnimation("endJ");
    }
    drawSprites();

    
}

function keyPressed(){

  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      tom.changeAnimation("movingT", tomAnim);
      tom.changeAnimation("movingT");

      jerry.changeAnimation("movingJ", jerryAnim);
      jerry.changeAnimation("movingJ");
  }
}
