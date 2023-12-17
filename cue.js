function Cue(x, y, r)
{


    var options = {
        friction:0.1,
        restitution: 1, 
        collisionFilter: {category:redCategory | greenCategory},
        isStatic: false,
        // collisionFilter: {mask: greenCategory}
    }

    this.body = Bodies.circle(x, y, r,options);
    this.label = "cue";
    World.add(engine.world, this.body);


    // this.changeAngle = function(a) {this.body.angle += radians(a)}
    

    this.show = function()
    {
        // drawVertices(this.body.vertices);
  
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);  
        rotate(this.body.angle);
        // rectMode(CENTER);

        stroke(0);
        fill(255,255,0);
        ellipse(0,0,r*2);
        pop();
    }

    this.updateCuePosition = function(mouse_x,mouse_y)
    {
        Matter.Body.set(this.body, "position",{x: mouse_x, y: mouse_y})
    }

    this.updateCueAngle = function(value)
    {
        Matter.Body.rotate(this.body,radians(value))
        // Matter.Body.set(this.body, "angle",(this.body.angle += radians(value)))
    }

}