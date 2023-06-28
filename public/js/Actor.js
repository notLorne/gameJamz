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
  
    update(maze) {
      if (this.positionX !== this.destinationX || this.positionY !== this.destinationY) {
        const deltaX = this.destinationX - this.positionX;
        const deltaY = this.destinationY - this.positionY;
  
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          const directionX = Math.sign(deltaX);
          const newPositionX = this.positionX + directionX * this.speed;
          if (maze.mazeGrid[newPositionX][this.positionY] !== 0) {
            this.positionX = newPositionX;
          }
        } else {
          const directionY = Math.sign(deltaY);
          const newPositionY = this.positionY + directionY * this.speed;
          if (maze.mazeGrid[this.positionX][newPositionY] !== 0) {
            this.positionY = newPositionY;
          }
        }
      }
    }
  }
  