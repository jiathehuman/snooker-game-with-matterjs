function Cue(x, y, w, h)
{
    this.w = w;
    this.h = h;

    var options = {
        friction:0.1,
        restitution: 1,
        collisionFilter: {category:redCategory},
        isStatic: false,
        // collisionFilter: {mask: greenCategory}
    }

    this.body = Bodies.rectangle(x, y, w, h,options);
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
        fill(0);
        rect(0,0,this.w,this.h)
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