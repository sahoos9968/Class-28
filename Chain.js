class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            length:20,
            stiffness:0.05,
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);

        World.add(world,this.chain)
    }
    display(){

        if (this.chain.bodyA){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(5);
        line(pointA.x,pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
}