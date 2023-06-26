class GamePainter {
    constructor(canvas, gameObjects) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.gameObjects = gameObjects;
    }
  
    addObject(gameObject) {
      this.gameObjects.push(gameObject);
    }
  
    paintObjects() {
      for (const gameObject of this.gameObjects) {
        gameObject.paint(this.context);
      }
    }
  }