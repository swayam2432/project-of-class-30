class SlingShot {
    constructor(body1, point1) {
        var options = {
            bodyA: body1,
            pointB: point1,
            length: 20,
            stiffness: 0.04
        }
        this.pointB = point1;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;
    }


    fly() {
        this.sling.bodyA = null;
    }


    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("yellow");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}
