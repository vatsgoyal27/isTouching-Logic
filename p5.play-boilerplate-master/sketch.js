function setup() {
  //create one Sprite
  rectangle1 = createSprite(200, 200, 40, 30);
  rectangle1.shapeColor = "blue";
  //create second Sprite
  rectangle2 = createSprite(100, 100, 40, 30);
  rectangle2.shapeColor = "blue";
  output = 0;
  //show sprite center and boundary
  rectangle1.debug = true;
  rectangle2.debug = true;
  createCanvas(800,400);
}

function draw() {
  //background color
  background(255,255,255);
  //move the second sprite
  rectangle2.x = mouseX;
  rectangle2.y = mouseY;

//the isTouching Logic :-
  if (rectangle2.x-rectangle1.x < rectangle1.width/2 + rectangle2.width/2 && rectangle1.x-rectangle2.x < rectangle1.width/2 + rectangle2.width/2 && rectangle2.y-rectangle1.y < rectangle1.height/2 + rectangle2.height/2 && rectangle1.y-rectangle2.y < rectangle1.height/2 + rectangle2.height/2 ) {
      output = 1;
  } else {
    output = 0;
  }
  if (output == 1) {
    //add whatever should happen if they are touching
    rectangle1.shapeColor = "green";
    rectangle2.shapeColor = "green";
  } else {
    //add default statements or leave blank
    rectangle2.shapeColor = "blue";
    rectangle1.shapeColor = "blue";
  }  
 drawSprites();
}