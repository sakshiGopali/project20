
var fixedRect,movingRect; 
var obj1,obj2,obj3,obj4;
function setup(){ 
  createCanvas(800,400);
   fixedRect=createSprite(200, 200, 50, 80); 
   fixedRect.shapeColor="green"; 
   movingRect=createSprite(400, 200, 80, 30);
    movingRect.shapeColor="green";
   
    obj1=createSprite(100, 100, 50, 50);
    obj1.shapeColor="green";

    obj2=createSprite(200, 200, 50, 50);
    obj2.shapeColor="green";

    obj3=createSprite(300, 300, 50, 50);
    obj3.shapeColor="green";

    obj4=createSprite(400, 400, 50, 50);
    obj4.shapeColor="green";
   }
function draw() { 
  background(0,0,0);
  fixedRect.debug =true;
   movingRect.debug =true; 
       //console.log(movingRect.x - fixedRect.x); 
       //console.log(movingRect.width/2 + fixedRect.width/2); 
   movingRect.x= World.mouseX; 
   movingRect.y= World.mouseY; 
  (
  if (isTouching()){
  
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green"; 
    fixedRect.shapeColor = "green";
  }
  

   drawSprites();
         }
function isTouching(obj1){

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) { 
     return true;
       }
     else { 
       return false;
       }


}