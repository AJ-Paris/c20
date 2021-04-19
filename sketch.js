var fobject, mobject;

function setup() {
  createCanvas(800,400);
  fobject = createSprite(400, 200, 50, 50);
  fobject.shapeColor = "black";
  mobject = createSprite(480,300,20,20);
  mobject.shapeColor = "black";
}

function draw() {
  background("lightgrey");  

  mobject.x = World.mouseX;
  mobject.y = World.mouseY;
  
  if(fobject.x-mobject.x <fobject.width/2 + mobject.width/2 &&
     mobject.x-fobject.x <fobject.width/2 + fobject.width/2 &&
     fobject.y-mobject.y <fobject.height/2 + mobject.height/2 &&
     mobject.y-fobject.y <fobject.height/2 + fobject.height/2 ){
       fobject.shapeColor = "pink";
       mobject.shapeColor = "pink";
     } else{
       fobject.shapeColor = "black";
       mobject.shapeColor = "black";
     }

  drawSprites();
}