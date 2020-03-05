
var ball
var ballimg

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
function preload(){
  ballimg = loadImage("ball.png");
}

function setup(){
  ball=createSprite(400, 200, 50, 50);
  createCanvas(1200,400);
}


function draw(){
ball.addImage(ballimg);
  colourchange();
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawsprites();
}

function colourchange ()
  if(ball.x>0 && ball.x<400){
  background("red")
}


  if(ball.x>400 && ball.x<800){
  background("blue")
}

  if(ball.x>800 && ball.x<1200){
  background("green")
}




