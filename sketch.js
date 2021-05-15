var balloon,balloonImage1,balloonImage2;

// create database and position variable here
var height,database;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");


  
  
  

  }
  

//Function to set initial environment
function setup() {
  createCanvas(1500,700);

  database=firebase.database();// var linking
  
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var balloonPosition=database.ref("Balloon/height");//reference
balloonPosition.on("value",function (data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
});
//data reading
  


}

// function to display UI
function draw() {
  background(bg);
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   
    updateHeight(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){

   balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
   // updateHeight(10,0);
  }

  else if(keyDown(UP_ARROW)){
 
    //balloon.addAnimation("hotAirBalloon",balloonImage2);
    //balloon.scale=balloon.scale+0.01;
   
   updateHeight(0,-10)
  }
  else if(keyDown(DOWN_ARROW)){
    
    //balloon.addAnimation("hotAirBalloon",balloonImage2);
    //balloon.scale=balloon.scale+0.01;
    //write code to move air balloon in down direction
    updateHeight(0,+10);
  }

 
  //fill(0);


 
}


function updateHeight(x,y){


database.ref("Balloon/height").set({
  'x' : height.x + x,
  'y' :height.y+y
});
}




