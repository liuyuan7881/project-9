
function setup() {
  createCanvas(400,400);
  background(51);
  box= createSprite(200, 200, 30, 30);

}
var box = createSprite(200,200,30,30)
function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.shapeCOLOR = "black"; 
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.SHAPECOLOR = "pink";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.shapeCOLOR = "purple";
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
    box.shapeCOLOR = "orange";
  }

  
  drawSprites();
}

