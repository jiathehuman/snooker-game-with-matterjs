// var Engine = Matter.Engine;
// var World = Matter.World;
// var Bodies = Matter.Bodies;
// var Body = Matter.Body;
var mouseConstraint;

//aliasing with Coding train
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composites, Composite, Events} = Matter;

var engine;
var cueBall;
var walls;
var redBalls;
var backgroundisDrawn;
var redCategory = 0x0002

function setup() 
{
    background(50,100,50);
    const canvas = createCanvas(1200, 600);
    backgroundCanvas= createGraphics(1200,600)
    tableTexture() // creates the texture of the table

    engine = Engine.create();
    engine.world.gravity.y = 0; // since it is a pool table

    ball_diameter = width/36;

    redBalls = [];
    colouredBalls = []
    boundaries = [];
    pockets = [];


    cueBall = new CueBall(width/2,height/2,ball_diameter/2)
    cue = new Cue(width/2,100,10,200);


    //https://www.youtube.com/watch?v=CdBXmsrkaPs&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=9
    function collision(event)
    {
        var pairs = event.pairs;
        for(var i = 0; i < pairs.length; i++)
        {
            var bodyA = pairs[i].bodyA;
            var bodyB = pairs[i].bodyB;
            // console.log(bodyA.label,bodyB.label);
        }
        console.log(event)
    }
    Events.on(engine, 'collisionStart', collision);

   rectMode(CENTER)



    let buttonOne = createButton('Game Mode One');
    buttonOne.position(0, height)
    buttonOne.mousePressed(()=>{
        gameModeOne()
    })
    let buttonTwo = createButton('Game Mode Two');
    buttonTwo.position(0, height + 50)
    buttonTwo.mousePressed(()=>{
        gameModeTwo()
    })
    let buttonThree = createButton('Game Mode Three');
    buttonThree.position(0, height+ 100)
    buttonThree.mousePressed(()=>{
        gameModeThree()
    })


}

function draw() 
{
    Engine.update(engine);
    background(50,100,50);
        // markings on the pool table
    stroke(255);
    strokeWeight(5);
    line(width/5,0,width/5,height);
    noFill();
    arc(width/5,height/2,width/6,ball_diameter*5,HALF_PI, PI + HALF_PI,PIE);

    fill(0) 
    noStroke()

    // for(var i = 0; i < 3; i++)
    // {
    //     fill(0)
    //     ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
    //     ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
    // }  
    for(var i = 0; i < pockets.length; i++)
    {
        pockets[i].show();
    }


    // image(backgroundCanvas,0,0) 

    // if(mConstraint.body){
    //     var pos = mConstraint.body.position;
    //     var m = mConstraint.mouse.position;
    //     stroke(0,255,0);
    //     line(pos.x, pos.y, m.x, m.y)
    // }

    // cue.changeAngle(140)

    // gameModeOne()
    if(cueBall){
        cueBall.show()
    }
    cue.show()
    for(var i = 0; i < redBalls.length; i++){
        redBalls[i].show();
        redBalls[i].checkPocketed();

    }
    for(var i = 0; i < colouredBalls.length; i++){
        colouredBalls[i].show();
        if(colouredBalls[i].checkPocketed()){
            console.log("it is true")
            colouredBalls[i].returnToPosition();
            // colouredBalls.splice(i,1)
            // i--; // loop through array backwards
        };
    }


    for(var i = 0; i < boundaries.length; i++){
        boundaries[i].show();
    }





}

function tableTexture()
{
    for(var i = 0; i < width; i++)
    {
        for(var j = 0; j < height; j++){
            var n = noise(i,j);
            var c = map(n, 0, 1, 50, 150);
            backgroundCanvas.stroke(40,c,40);
            backgroundCanvas.point(i,j);
        }
    }
}


/////////
//Helper functions
////////

function drawVertices(vertices)
{
    beginShape();
    for(var i = 0; i < vertices.length; i++)
    {
        vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cue.changeAngle(2)
    }
    if(keyCode === RIGHT_ARROW){
        cue.changeAngle(-2)
    }
}
