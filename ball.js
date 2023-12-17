/** 
 * I used The Coding Train's tutorial on Matter.js to figure out how to separate each Matter.js Body into a class.
*/

function Ball(x, y, r, color)
{
    var options = {
        friction:0.1,
        restitution: 1,
        isStatic: false,
        // collisionFilter: {mask: redCategory}
        // collisionFilter: {mask: greenCategory}
    }

    this.originalx = x
    this.originaly = y

    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "ball"; // overrides label
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
        strokeWeight(2)
        stroke(0)
        fill(color);
        ellipse(0,0,this.r*2);
        pop();
        // drawVertices(this.body.vertices);
    }
    this.checkPocketed = function()
    {
        var pos = this.body.position;
        // if(pos.x < 50)
        // {
        //  return true;
        // }
        var string = checkPocketed(pos.x,pos.y)
        if(string != false){
            // this.removeBall()
            return true
        }
        // console.log(number)
        // World.remove(engine.world, this.body);

    }
    this.removeBall = function()
    {
        // var pos = this.body.position;
        // pos.x = width/2
        // pos.y = height/2
        // Matter.Body.set(this.body, "position",{x: this.originalx, y: this.originaly})
        var obj = {
            x: this.originalx,
            y: this.originaly,
            color: color,
            options: options

        }
        World.remove(engine.world, this.body);
        return obj
    }
    // this.removeBall = function()
    // {
    //     World.remove(engine.world,this.body)
    // }
}