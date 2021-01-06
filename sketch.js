var wall;
var car1, car2, car3, car4;
var speed1, speed2, speed3, speed4;
var weight1, weight2, weight3, weight4;
function setup() {
  createCanvas(850,400);

  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight1=random(400,1500);  
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);
  wall=createSprite(750, height/2, 70, height);
  car1 = createSprite(50,50,20,20);
  car2 = createSprite(50,150,20,20);
  car3 = createSprite(50,250,20,20);
  car4 = createSprite(50,350,20,20);
  
}

function draw() {
  background(255,255,255);
  if(car1.x<55){
    textSize(24);
    fill("black");
    text("press space to test",350,200);
  }
  if(keyDown("space")){
    car1.velocityX=speed1;
    car2.velocityX=speed2;
    car3.velocityX=speed3;
    car4.velocityX=speed4;
  }
  
  if(wall.x-car1.x<(wall.width+car1.width)/2){
    car1.velocityX=0;
    var deformation1=(0.5*weight1*speed1*speed1)/22500;
    if(deformation1>=180){
      car1.shapeColor=color(255,0,0);
    }
    if(deformation1<=180 && deformation1>=100){
      car1.shapeColor=color(230,230,0);
    }
    if(deformation1<=100){
      car1.shapeColor=color(0,255,0);
    }
  }

  if(wall.x-car2.x<(wall.width+car2.width)/2){
    car2.velocityX=0;
    var deformation2=(0.5*weight2*speed2*speed2)/22500;
    if(deformation2>=180){
      car2.shapeColor=color(255,0,0);
    }
    if(deformation2<=180 && deformation2>=100){
      car2.shapeColor=color(230,230,0);
    }
    if(deformation2<=100){
      car2.shapeColor=color(0,255,0);
    }
  }

  if(wall.x-car3.x<(wall.width+car3.width)/2){
    car3.velocityX=0;
    var deformation3=(0.5*weight3*speed3*speed3)/22500;
    if(deformation3>=180){
      car3.shapeColor=color(255,0,0);
    }
    if(deformation3<=180 && deformation3>=100){
      car3.shapeColor=color(230,230,0);
    }
    if(deformation3<=100){
      car3.shapeColor=color(0,255,0);
    }
  }

  if(wall.x-car4.x<(wall.width+car4.width)/2){
    car4.velocityX=0;
    var deformation4=(0.5*weight4*speed4*speed4)/22500;
    if(deformation4>=180){
      car4.shapeColor=color(255,0,0);
    }
    if(deformation4<=180 && deformation4>=100){
      car4.shapeColor=color(230,230,0);
    }
    if(deformation4<=100){
      car4.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
  }