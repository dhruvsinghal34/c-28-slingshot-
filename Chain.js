class SlingShot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10

        }
        this. slingShot = Constraint.create(options);
        World.add(world, this. slingShot);
        this.pointB=point2;
    }
    Fly(){
     this.slingShot.bodyA=null;

    }

    display(){

       
        strokeWeight(4);
        if(this.slingShot.bodyA!==null){
            var pointA = this. slingShot.bodyA.position;
         line(pointA.x, pointA.y,this. pointB.x, this.pointB.y);
         
         }
       
    }
    
}