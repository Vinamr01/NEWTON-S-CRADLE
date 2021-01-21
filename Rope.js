class Rope{
    constructor(body1 , body2 , offsetX , offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
        var options ={
            
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX , y:this.offsetY}
            
        }
   
     this.Rope = Constraint.create(options);
    }
    display(){
         this.Rope.body1.position;
         this.Rope.body2.position
        stroke("black")
        strokeWeight(5);
        line(this.Rope.body1.position.x , this.Rope.body1.position.y ,  this.Rope.body2.position.x ,  this.Rope.body2.position.y);

    }
    }