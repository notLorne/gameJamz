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
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              const cellX = startX + i;
              const cellY = startY + j;
              const x = j * 128;
              const y = i * 96;
              const cellValue = mazeGrid[cellX][cellY];

              // Check if the cell value is not equal to 0
              if (cellValue !== 0) {
                  const gameObject = this.gameObjects[cellValue];
                  const texture = gameObject.texture;

                  // Draw the floor texture multiple times for each cell
                  for (let k = 0; k < 16; k++) {
                      const tileX = x + (k % 4) * 32;
                      const tileY = y + Math.floor(k / 4) * 24;
                      context.drawImage(texture, tileX, tileY, 32, 24);
                  }
              }
          }
      }

      // Reset the transformations
      context.setTransform(1, 0, 0, 1, 0, 0);
  }
}
