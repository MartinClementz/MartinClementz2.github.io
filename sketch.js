var x = 250;
var y = 250;
var speedx = 6;
var speedy = -6;

var farge = 255;
var telling = 0;

var vor = 0;

var speed = 6;

var a = 0;
var locx = 200;

//1 = muskontroll og 2 = pilkontroll

var system = 1;



function setup() {
  createCanvas(500, 500);
  
  
  
  
}

function draw() {
  background(200);
  
  noFill();
  strokeWeight(2);
  rect(0, 0, 500, 500);
  fill(0);
  rect(480, 480, 20, 20);
  fill(255);
  rect(460, 480, 20, 20);
  
  if(system == 1){
   Spiller();
  }else if(system == 2){
    Spiller2();
  }
 
  
    if (keyIsDown(LEFT_ARROW))
    locx = locx - 10;

  if (keyIsDown(RIGHT_ARROW))
    locx = locx + 10;
  
  if(telling > 10 && telling < 19){
    speed = 9;
  } else if (telling > 20 && telling < 30){
    speed = 12;
  }
  
  Ball();
  
  
  
  
  textSize(50);
  strokeWeight(2);
  text(telling, 5, 50);
  
 if(vor == 1){
   stroke(0);
   line(75, 258, 425, 258);
 }
  
}

function mouseClicked(){
  if(mouseX > 200 && mouseX < 300 && mouseY > 250 && mouseY < 300 && vor == 1){
    window.location=document.URL
  }
  if(mouseX > 460 && mouseX < 480 & mouseY > 480 & mouseY < 500){
    system = 1;
  }else if(mouseX > 480 && mouseX < 500 && mouseY > 480 && mouseY < 500){
    system = 2;
  }
  
  
  }

function Ball(){
    x = x + speedx;
    y = y + speedy;
    
    if(x > width ){
      speedx = - speed;
    } else if (x < 0){
      speedx = + speed;
    } else if (y > height){
      speedy = 1;
      speedx = 0;
      
      textSize(50);
      fill(255);
      text("GAME OVER", 100, 250);
       
       vor = 1;
       
      textSize(50);
      fill(0);
      text("start", 200, 300);
      
      
    }else if (y < 0){
      speedy = +speed;
    }
    
    
    
 
  fill(255);
  strokeWeight(4);
  ellipse(x, y, 20, 20);
  
}

function Spiller(){
  
  rect( mouseX, 400, 50, 10);
  
  if(y + 20  > 400 && y - 20 < 403 && x + 20 > mouseX && x - 20 < mouseX + 50){
    speedy = - speed;
    telling = telling + 1;
    
     
  
    
  
  if( mouseX < 0){
    mouseX = 0;
  }else if( mouseX + 50 > 500){
    mouseX = 500;
  }
}
}

function Spiller2(){
  
  
  rect(locx, 400, 50, 10)
  
  if(y + 20 > 400 && y - 20 < 403 && x + 20 > locx && x - 20 < locx + 50){
    speedy = - speed;
    telling = telling + 1;
  }
  
}


