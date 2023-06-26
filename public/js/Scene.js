class Scene {
    constructor() {
      this.gameObjects = [];
      this.gamePainters = [];
    }
  
    addObject(gameObject) {
      this.gameObjects.push(gameObject);
    }
  
    addGamePainter(gamePainter) {
      this.gamePainters.push(gamePainter);
    }
  
    update(deltaTime) {
      // Update game objects in the scene
      for (const gameObject of this.gameObjects) {
        gameObject.update(deltaTime);
      }
    }
  
    render() {
      for (const gamePainter of this.gamePainters) {
        gamePainter.paintObjects();
      }
    }
  }
  
  export default Scene;
  