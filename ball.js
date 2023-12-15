/** 
 * I used The Coding Train's tutorial on Matter.js to figure out how to separate each Matter.js Body into a class.
*/

function Ball(x, y, r, color)
{
    var options = {
        friction:0.1,
        restitution: 1,
        isStatic: false
    }

    this.body = Bodies.circle(x, y, r, options);
    this.label = "ball";
    this.r = r;
    World.add(engine.world, this.body);

    this.show = function()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // rotate(radians(angle));
        rectMode(CENTER);
        fill(color);
        ellipse(0,0,this.r*2);
        pop();
        // drawVertices(this.body.vertices);
    }
}