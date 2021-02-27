class string{
    constructor(bodyA, bodyB){
    
    var option={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.7,
        length:100
    }
    
this.String=Constraint.create(option)
World.add(world, this.String)

    }
  
    display() {
     
line (this.String.bodyA.position.x, this.String.bodyA.position.y, this.String.bodyB.position.x, this.String.bodyB.position.y)

    }
  }
  