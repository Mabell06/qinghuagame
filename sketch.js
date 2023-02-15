//personaje
var qinghua, qinghuarunImg;
var fondo, fondoImg;


function preload(){
  qinghuaRunImg = loadAnimation("img1.png", "img2.png", "Img3.png");
  fondoImg = loadImage("paisaje.png"); 
}

function setup() {
  createCanvas(600,300);
  //createCanvas(windowWidth, windowHeight);

  fondo = createSprite(0, 0, 600, 600)
  fondo.addImage(fondoImg);
  
  fondo.x = fondo.width /2;

  qinghua = createSprite(200,225,50,50);
  qinghua.addAnimation("running", qinghuaRunImg);
  qinghua.scale = 0.1;  
  
}

function draw() {
 background("width");
 fondo.velocityX = -3; 

 if (fondo.x < 0){
    fondo.x = fondo.width/2;
  }
 
  drawSprites();
}