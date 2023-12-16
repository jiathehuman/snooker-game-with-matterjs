function Pocket(x, y, d){
    this.x = x;
    this.y = y;

    var options = {
        friction:0.1,
        restitution: 1,
        isStatic: true
    }

    this.body = Bodies.circle(x, y, d/2, options);
    this.body.label = "pocket"; // overrides label
    World.add(engine.world, this.body);

    this.show = function()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // rotate(radians(angle));
        fill(0);
        ellipse(0,0,d);
        pop();
        // drawVertices(this.body.vertices);

    }
}