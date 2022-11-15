var box1;

function setup() {
  createCanvas(550,400);

  box1 = createSprite(200,100,20,100);
  box1.shapeColor = "red";
}

function draw(){
  background(0);

  if(keyWentDown("space")){
    box1.shapeColor = "gray";
  }
  if(keyWentUp("space")){
    box1.shapeColor = "red";
  }

  drawSprites();

}