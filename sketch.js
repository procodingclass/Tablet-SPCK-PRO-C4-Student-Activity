var trex, trexRunning;
var ground, invisibleGround, groundImage;

var score;

function preload() {
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trexRunning);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //creating invisible ground
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //generate random numbers
  var rand = Math.round(random(1, 100));
}

function draw() {
  //set background color
  background("white");

  // jump when the space key is pressed
  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -12;
  }

  // Add gravity
  trex.velocityY = trex.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //stop trex from falling down
  trex.collide(invisibleGround);

  //Spawn Clouds
  spawnClouds();

  drawSprites();
}

//function to spawn the clouds
function spawnClouds() {
  // write your code here
  //writes the code to generate a cloud for every 60 frames
  // Hint : Checkout step 2 image inside screenshots folder


    //Create cloud sprite and add velocity to it
    // Hint : Checkout step 1 image inside screenshots folder


    // Add cloud image and resize the image
    //Hint : Checkout step 3 image inside screenshots folder


    // set random position
    //Hint : Checkout step 4 image inside screenshots folder


    //adjust the depth
    //Hint : Checkout step 5 image inside screenshots folder


}
