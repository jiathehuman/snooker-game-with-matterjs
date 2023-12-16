function Pocket(x, y, d){
    this.x = x;
    this.y = y;
    this.display = function(){
        fill(0)
        ellipse(x,y,d,d)
    }
//     this.removeBall = function(balls)
//     {
//         for(var i = 0; i < balls.length; i++)
//         {

//         }
//     }
}