// var Engine = Matter.Engine;
// var World = Matter.World;
// var Bodies = Matter.Bodies;
// var Body = Matter.Body;


//aliasing with Coding train
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Query, Constraint, Composites, Composite, Events, Collision, Common} = Matter;


var engine;
var cueBall;
var walls;
var redBalls;
var backgroundisDrawn;
var defaultCategory = 0x0001, redCategory = 0x0002
var greenCategory = 0x0004
var blueCategory = 0x0008;

var p1_count = 0
var p2_count = 0
var p3_count = 0
var p4_count = 0
var p5_count = 0
var p6_count = 0

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
    // pockets = new Pockets();
    holdingarray = [];


    cueBall = new CueBall(width/2,height/2,ball_diameter/2)
    cue = new Cue(width/2,100,10,200);


    // //https://www.youtube.com/watch?v=CdBXmsrkaPs&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=9
    Events.on(engine, 'collisionStart', collisionStart);
    Events.on(engine, 'collisionActive', collisionActive);
    Events.on(engine, 'collisionEnd', collisionEnd)

    var lastTime = Common.now();

    // Events.on(engine, 'beforeUpdate', function(event) {
    //     var engine = event.source;

    //     // apply random forces every 5 secs
    //     if (Common.now() - lastTime >= 5000) {
    //         console.log("shake")

    //         // update last time
    //         lastTime = Common.now();
    //     }
    // });

    // var mouse = Mouse.create(canvas.elt),
    // mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     // collisionFilter: redCategory,
    //     constraint: {
    //         stiffness: 0.2,
    //         // collisionFilter: {category: redCategory},
    //     }
    // });
    // World.add(engine.world, mouseConstraint);

    // Events.on(mouseConstraint, 'mousedown', function(event) {
    //     // console.log('mousedown', event);
    //     // console.log(event)
    //     console.log(event.mouse.position)
    // });

    // Events.on(mouseConstraint, 'mouseup', function(event) {
    //     // console.log('mousedown', event);
    //     console.log(event.mouse.position)
    // });



    // events = new Events(Events)


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
    // engine.enableSleeping = true;

    background(50,100,50);
        // markings on the pool table
    stroke(255);
    strokeWeight(5);
    line(width/5,0,width/5,height);
    noFill();
    arc(width/5,height/2,width/6,ball_diameter*5,HALF_PI, PI + HALF_PI,PIE);

    fill(0) 
    noStroke()

    for(var i = 0; i < 3; i++)
    {
        fill(0)
        ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
        ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
    }  
    // for(var i = 0; i < pockets.length; i++)
    // {
    //     pockets[i].show();
    //     // collisions = Query.collides(pockets[i].body);
    //     // console.log(collisions)
    // }


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
    // cue.updateCuePosition(mouseX,mouseY)
    for(var i = 0; i < redBalls.length; i++){
        redBalls[i].show();
        if(redBalls[i].checkPocketed())
        {
            var obj = redBalls[i].removeBall()
            console.log(obj)
            redBalls.splice(i,1);
            i--;
        }

    }
    for(var i = 0; i < colouredBalls.length; i++){
        colouredBalls[i].show();
        if(colouredBalls[i].checkPocketed())
        {
            console.log("yes")
            var obj = colouredBalls[i].removeBall()
            World.remove(engine.world, colouredBalls[i].body);
            colouredBalls.splice(i,1);
            console.log(obj)
            holdingarray.push(obj)
            // console.log(Matter.Common.values(colouredBalls[i]))
            i--;
        }
    };


    for(var i = 0; i < boundaries.length; i++){
        boundaries[i].show();
    }

    if((p1_count || p2_count || p3_count || p4_count || p5_count || p6_count) > 1)
    {
        p1_count = 0
        p2_count = 0
        p3_count = 0
        p4_count = 0
        p5_count = 0
        p6_count = 0
    }

    // if(mouseDragged){
    //     stroke(0)
    //     strokeWeight(10)
    //     line(cueBall.body.position.x,cueBall.body.position.y,mouseX, mouseY)
    // }

    if(cueBall.body.speed < 0.2){
        push()
        stroke(0)
        strokeWeight(5)
        line(cueBall.body.position.x, cueBall.body.position.y, mouseX, mouseY)
        // translate(cueBall.body.position.x, cueBall.body.position.y)
        // let x = mouseX - cueBall.body.position.x;
        // let y = mouseY - cueBall.body.position.y;
        // let a = atan2(y,x);
        // rotate(a)
        // line(0,0,50,10)
 
        pop()
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

    if(key === "a"){
        cueBall.moveCueBall(mouseX,mouseY)
    }

    }

function mousePressed()
{
    // cueBall.shootCueBall(1000,mouseX,mouseY)
    // cueBall.shootCueBall();
    // apply force to cue ball
    // research other ways to apply force
    // limit the force so it is not too large

    var force = 20;
    var forceX = (cueBall.body.position.x - mouseX)/force;
    var forceY = (cueBall.body.position.y - mouseY)/force;
    var appliedForce = {x: forceX, y:forceY}; // vector
    cueBall.shootCueBall(appliedForce)
    print(forceX,forceY);
    // Matter.Body.applyForce(cueBall,{x:cueBall.body.position.x, y: cueBall.body.position.y}, appliedForce);

    // stroke(0)
    // strokeWeight(100)
    // console.log(cueBall.body.position.x, cueBall.body.position.y)
    // console.log(mouseX, mouseY)
    // line(cueBall.body.position.x,cueBall.body.position.y,mouseX, mouseY)



    // return true


    // var force = 1000;
    // var forceX = (cueBall.body.position.x - mouseX)/force;
    // var forceY = (cueBall.body.position.y - mouseY)/force;
    // var appliedForce = {x: forceX, y:forceY}; // vector
    // print(forceX,forceY);
    // Body.applyForce(cueBall,{x:cueBall.body.position.x, y: cueBall.body.position.y}, appliedForce);
}
