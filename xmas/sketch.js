var myBg, mic, volume;

function preload() {
  myBg = loadImage('assets/babbosenzatesto-01.png');
    
}

var snowflakes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  //With microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  volume = mic.getLevel();
  
  volume = map(volume,0,1,20,60)
  push();

  translate(0,0);
  background('#AEDEE3');
   
  

  //move the center respect to the head
  push();
  translate(width/2,height/2-height/11);
  imageMode(CENTER)
  image(myBg,0,100,360,640);
  pop(); 
  
    
  fill(5,51,117);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(volume);
  text("OH OH OH!",width/2,height/1.15); 
  
 
//SNOWFLAKES
  if(true){
    var amount= map(volume,0,1,0,5);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      //add snowflake to the array of snowflakes
      snowflakes.push(obj);
    }
  }
  
  
  for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 2;
    
    // Increase the single snowflake vertical position
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006; // the last piece needs to simulate gravity
    
    // Create a new ellipse using the x and y properties of the snowflake object
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
  
  // Ideally at the end of the sketch:
  // remove elements from array when they go out of the window
  // (not a minimum requirement, just useful for better performances)
  for (var i=snowflakes.length-1; i>= 0; i--){
    if (snowflakes[i].y > height){
      snowflakes.splice(i,1);
    }
  }
   
  fill('#AEDEE3');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(50);
  text("MARRY XMAS!",width/2,height/2); 
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}