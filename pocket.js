function checkPocketed(x,y)
{
    if(dist(x,y,10,10) < ball_diameter + 10)
    {
        // console.log("hit first pocket")
        p1_count += 1
        return("pocket1")
    }
    else if(dist(x,y,width/2,10) < ball_diameter + 10)
    {
        // console.log("hit second pocket")
        p2_count += 1
        return("pocket2")
    }
    else if(dist(x,y,width-10,10) < ball_diameter + 10)
    {
        // console.log("hit third pocket")
        p3_count+= 1
        return("pocket3")
    }
    else if(dist(x,y,10,height-10) < ball_diameter + 10)
    {
        // console.log("hit fourth pocket")
        p4_count+= 1
        return("pocket4")
    }
    else if(dist(x,y,width/2,height-5) < ball_diameter + 10)
    {
        // console.log("hit fifth pocket")
        p5_count+= 1
        return("pocket5")
    }
    else if(dist(x,y,width - 10,height - 10) < ball_diameter + 10)
    {
        // console.log("hit sixth pocket")
        p6_count+= 1
        return("pocket6")
    }
    else{
        return false;
    }
    
}



