class FloorPainter extends GamePainter {
    constructor(canvas, gameObjects, camera, maze) {
      super(canvas, gameObjects, camera);
      this.maze = maze;
    }
  
    paintObjects(focusedPosition) {
      const context = this.context;
      const camera = this.camera;
      const mazeGrid = this.maze.mazeGrid;
  
      // Clear the canvas
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      // Apply camera transformations
      context.translate(-camera.x, -camera.y);
      context.scale(camera.scale, camera.scale);
  
      // Calculate the starting position for the 3x3 grid
      const startX = focusedPosition[0] - 1;
      const startY = focusedPosition[1] - 1;
  
      // Iterate over the 3x3 grid and draw floor textures
      for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
          const cellValue = mazeGrid[i][j];
          const gameObject = this.gameObjects[cellValue];
          const texture = gameObject.texture;
  
          // Draw the floor texture multiple times for each cell
          for (let k = 0; k < 16; k++) {
            const x = (j - startY) * 128 + (k % 4) * 32;
            const y = (i - startX) * 96 + Math.floor(k / 4) * 24;
            context.drawImage(texture, x, y, 32, 24);
          }
        }
      }
  
      // Reset the transformations
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
  