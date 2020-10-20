class Box{
    constructor(x,y){

        var options = {
            restitution: 1.4
           }
           this.width = 50;
           this.height = 55;
           
           this.body = Bodies.rectangle(x, y, 50, 55,  options);
           World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //push();
        //translate(pos.x, pos.y);
        fill("green");
        
        rectMode(CENTER);
        rect(pos.x, pos.y, 50, 55); 
       // pop();
    }
}