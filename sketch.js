/* This sketch creates a Sierpinski Triangle thrugh use of recursion.
A slider is used to show the different levels of depth of the recursion
(recursion is when a function calls itself within the function)
Tareq Mia
*/

//declare slider variable
let slider;
let len = 700; //will be used to set the size of the original triangle


function setup() {
  //createCanvas(700, 700);
  let canvas = createCanvas(750,  750);
  canvas.style('justify-content', 'center');
  slider = createSlider(1, 8, 1);  //creates a slider with values from 1-8, starting at 1
  slider.position(890, 155); //positions slider near the top of the triangle
}

function draw() {
  background(255);
  let val = slider.value();
  Sierpinski(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, val, 1);
  fill('#FFFF00');
}

//creates the base triangle
function createTriangle(x, y, z){
  //uses proterties of triangles to calculate the location of the points
  triangle(x, y, x + z / 2, y - z * sqrt(3) / 2, x + z, y);
}

//recusrsive function to create the smaller triangles
function Sierpinski(x, y, z, level, max){
  //if the max depth is reached, the origianl triangle is drawn
  if(level == max){
    createTriangle(x, y, z);
  } else {
    //recursive call to draw the smaller triangles
    Sierpinski(x, y, z / 2, level - 1, max);
    Sierpinski(x + z / 2, y, z / 2, level - 1, max);
    Sierpinski(x + z / 4, y - z * sqrt(3) / 4, z / 2, level - 1, max); 
  }
  
}
