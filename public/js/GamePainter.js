class GamePainter {
  constructor(canvas, gameObjects, camera) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.gameObjects = gameObjects;
    this.camera = camera;
  }

  addObject(gameObject) {
    this.gameObjects.push(gameObject);
  }

  paintObjects() {
    const context = this.context;
    const camera = this.camera;

    // Clear the canvas
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Apply camera transformations
    context.translate(-camera.x, -camera.y);
    context.scale(camera.scale, camera.scale);

    // Paint the game objects
    for (const gameObject of this.gameObjects) {
      gameObject.paint(context);
    }

    // Reset the transformations
    context.setTransform(1, 0, 0, 1, 0, 0);
  }
}
