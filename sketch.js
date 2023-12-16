// var Engine = Matter.Engine;
// var World = Matter.World;
// var Bodies = Matter.Bodies;
// var Body = Matter.Body;
var mouseConstraint;

//aliasing with Coding train
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composites, Composite} = Matter;

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

    // for(var i = 0; i < 3; i++)
    // {
    //     fill(0)
    //     ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
    //     ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
    // }  

    redBalls = [];
    colouredBalls = []
    boundaries = [];
    pockets = [];
    // for(var i = 0; i < 3; i++)
    // {
    //     ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
    //     ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
    // }  
    for(var i = 0; i < 3; i++)
    {
        p1 = new Pocket(i*width/2,0, ball_diameter*1.5)
        p2 = new Pocket(i*width/2,height,ball_diameter*1.5)
        pockets.push(p1,p2)
    }  
    // boundaries.push(new Boundary(0,height/2,20,height)); // left boundary
    // boundaries.push(new Boundary(width/2,0,width,20)); // top boundary
    // boundaries.push(new Boundary(width,height/2,20,height)); // right boundary
    // boundaries.push(new Boundary(width/2,height,width,20)); // bottom boundary


    // for(var j = 0; j < 5; j++) // columns
    // {
    //     var x = width*0.8 + j * ball_diameter // each column
    //     var starty = height/2 - j * ball_diameter/2

    //     var numBalls = j + 1;

    //     for(var i = 0; i < numBalls; i++) //columns
    //     {
    //         y = starty + i * ball_diameter
    //         ball = new Ball(x,y,ball_diameter/2,'red')
    //         redBalls.push(ball)
    //     }
    // }

    // colouredBalls.push(new Ball(width* 0.8 - ball_diameter, height/2,ball_diameter/2,'pink'))
    // colouredBalls.push(new Ball(width/5, height/2 - 2.5*ball_diameter,ball_diameter/2,'green'))
    // colouredBalls.push(new Ball(width/5, height/2,ball_diameter/2,'brown'))
    // colouredBalls.push(new Ball(width/5, height/2 + 2.5*ball_diameter,ball_diameter/2,'yellow'))
    // colouredBalls.push(new Ball(width/2, height/2,ball_diameter/2,'blue'))
    // colouredBalls.push(new Ball(width - 2 * ball_diameter, height/2,ball_diameter/2,'black'))


    // for(var i = 0; i < 16; i++)
    // {
    //     redBalls.push(new Ball(width/2,height/2 +i*ball_diameter + ball_diameter, ball_diameter/2));
    // }

    cueBall = new CueBall(width/2,height/2,ball_diameter/2)
    cue = new Cue(width/2,100,10,200);

    // var mouse = Mouse.create(canvas.elt);
    // var options =
    // {
    //     mouse: mouse
    // }
    // mouse.pixelRatio = pixelDensity()
    // mConstraint = MouseConstraint.create(engine, options)
    // World.add(engine.world, mConstraint);
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
        pockets[i].display()
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
