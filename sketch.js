const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[]

var boats=[]

var boat
var cannonBall
var score=0


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
 
  
  

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 150, 100, 50, angle);
  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);



  Engine.update(engine);
  ground.display();
 
  
  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
    
    
}


  cannon.display();
  tower.display();
showBoat()

 //Matter.Body.setVelocity(boat.body,{x:-0.9,y:0})
 
}





function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonBall = new CannonBall(180,150,40);
    balls.push(cannonBall)
   
  }

}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    
    balls[balls.length-1].shoot()
   
  }
}


function showCannonBalls(ball,index){
  ball.display()
  
}


function showBoat(){
  
 
  if (boats.length > 0) {
    if (
      boats.length < 4&&
      boats[boats.length - 1].body.position.x < 900  
    ) {
      //var positions = [-130, -100, -120, -80];
      //var position = random(positions);
      var boat = new Boat(width,400, 200, 200);
      boats.push(boat);
       console.log(boat)
    }

    for (var i = 0; i < boats.length; i++) {
      Matter.Body.setVelocity(boats[i].body, {
        x: -0.9,
        y: 0
      });

      boats[i].display();
      //pirateLaughSound.play()
    }
  } else {
    var boat = new Boat(width, height - 100, 200, 200, -100);
    boats.push(boat);
  }
}