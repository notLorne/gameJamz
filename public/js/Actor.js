class Actor {
    constructor(id, name, isPlayer, positionX, positionY, destinationX, destinationY, speed) {
      this.id = id;
      this.name = name;
      this.isPlayer = isPlayer;
      this.positionX = positionX;
      this.positionY = positionY;
      this.destinationX = destinationX;
      this.destinationY = destinationY;
      this.speed = speed;
    }
  
    moveTo(destinationX, destinationY) {
      this.destinationX = destinationX;
      this.destinationY = destinationY;
    }
  
    update() {
      if (this.positionX !== this.destinationX || this.positionY !== this.destinationY) {
        const deltaX = this.destinationX - this.positionX;
        const deltaY = this.destinationY - this.positionY;
  
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          const directionX = Math.sign(deltaX);
          this.positionX += directionX * this.speed;
        } else {
          const directionY = Math.sign(deltaY);
          this.positionY += directionY * this.speed;
        }
      }
    }
  }
  