
var fixedRect, movingRect;
var gameObject1, gameObject2;
var Rect1
var Rect2
var Rect3
var Rect4
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  Rect1=createSprite(200,100,50,80);
  Rect1.shapeColor= "pink"

  Rect2=createSprite(250,150,50,80);
  Rect2.shapeColor="orange"

  Rect3=createSprite(300,200,50,80)
  Rect3.shapeColor="pink"

  Rect4=createSprite(350,250,50,80)
  Rect4.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,Rect2)){
    movingRect.shapeColor = "blue";
    Rect1.shapeColor = "yellow";
    fixedRect.shapeColor="blue"
    Rect2.shapeColor="orange"
    Rect3.shapeColor="pink"
    Rect4.shapeColor="blue"
  }
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor= "pink"
   Rect1.shapeColor = "purple"
   Rect2.shapeColor="red"
   Rect3.shapeColor="grey"
   Rect4.shapeColor="orange"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


