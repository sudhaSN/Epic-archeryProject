const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerObj, playerBaseObj;
var computerPlayer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBaseObj = new PlayerBase(width - 1300, random(450, height - 300), 180, 150);

   playerObj= new Player(285,playerBaseObj.body.position.y -153,50,180);

   computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );

   computerPlayer = new Computerplayer(
     width - 280,
     computerBase.body.position.y -153,
     50,
     180
   );

  

}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBaseObj.display()
   playerObj.display(); 
   computerBase.display() 
   computerPlayer.display();
  
   

}
