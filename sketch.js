//Create variables here
var dog, happyDogImg, dogImg, database,foodStock,foodS;

function preload()
{
  //load images here
  dogImg=loadImage("images/Dog.png");
  happyDogImg=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  

  dog=createSprite(250,250,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
}


function draw() {  
  background("green");
  
    textSize(20);
    fill(255);
    text("NOTE: Press UP Arrow to feed DRAGO milk",50,50);
    text("Food Remaining:"+foodS,150,150);

  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg);
  }

  

  drawSprites();
 

}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

database.ref("/").update({
  food:x
});
}
 function readStock(data){
   foodS=data.val();
 }


