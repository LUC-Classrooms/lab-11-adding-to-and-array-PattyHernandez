
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1);// creates empty array with 1 space

function setup() {// runs once
  createCanvas(500, 300); // creates canvas size
  dots[0] = new Dot(width/2, height/2);// first array element with dots
}// end setup function

function draw() {// draw something
  background(200);//set background color
  
  for(let i = 0; i < dots.length; i++){// loop through array
    dots[i].move(); //move each object/dot
    dots[i].display(); //display object/dot
  }
  textSize(24);//set text sizr
  fill(100, 0, 200);//set text color
  text("'dots' array length: " + dots.length, 100, 100);// shows size of array on screen

}

function mousePressed(){// when mouse click
  let obj = new Dot(mouseX, mouseY);// new object/dots

  dots.push(obj);//add dot array
  console.log(dots.length); //print size array
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){// constructor function
  
  this.x = X;//set x right for first argument
  this.y = Y;//set y right from the second argument
  this.w = random (20, 50);// random width
  this.sx = random(-5, 5);//set x speed
  this.sy = random(-5, 5);// set y speed
  this.r = random(0, 255);// set red level
  this.g = random(0, 255);// set green level
  this.b = random(0, 255);// set blue level
  
  this.display = function(){// show object
    fill(this.r, this.g, this.b);// set color
    ellipse(this.x, this.y, this.w, this.w);// draw circle
  }// end of section
  
  this.move = function(){//move object
    this.x += this.sx;// update horizontal location
    this.y += this.sy;// update vertical location
    
    if (this.x < 0 || this.x > width){//if off screen horizontal 
        this.sx *= -1;//change direction
    }
    if (this.y < 0 || this.y > height){// if off screen verdically
        this.sy *= -1;// change direction
    }// finish/ the end
  }
    
}// end of dots
