/** 
 * This class creates a cue ball, taking in an initial x and y position and a r as radius.
*/

function CueBall(x, y, r)
{
    var options = {
        friction:0.1,
        restitution: 0.2,
        isStatic: false
    }

    this.body = Bodies.circle(x, y, r, options);
    this.label = "cueBall";
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
}