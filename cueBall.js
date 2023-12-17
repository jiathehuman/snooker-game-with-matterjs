/** 
 * This class creates a cue ball, taking in an initial x and y position and a r as radius.
*/

function CueBall(x, y, r)
{
    var options = {
        friction:0.1,
        restitution: 0.2,
        density: 10,
        isStatic: false,
        collisionFilter: {category:redCategory | greenCategory},
    }

    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "cueBall"; // overrides label
    this.r = r
    World.add(engine.world, this.body);

    this.show = function()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // rotate(radians(angle));
        fill(255);
        ellipse(0,0,this.r*2);
        pop();
        // drawVertices(this.body.vertices);
    }

    this.shootCueBall = function(appliedForce)
    {
        if(this.body.speed < 0.2){
            Matter.Body.set(this.body, "velocity", appliedForce)
        }
    }

    this.moveCueBall = function(mouse_x, mouse_y)
    {
        Matter.Body.set(this.body, "position",{x: mouse_x, y: mouse_y})
    }

    // this.checkBallSleeping = function()
    // {
    //     console.log(this.body.isSleeping)
    //     // if(this.body.motion == 0)
    //     // {
    //     //     return true;
    //     // }
    //     // else{
    //     //     console.log("ball is moving")
    //     // }
    // }
}