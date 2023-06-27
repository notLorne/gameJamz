class Game {
    constructor(numMazes) {
      this.mazes = this.generateMazes(numMazes);
    }
  
    generateMazes(numMazes) {
      const mazes = [];
  
      for (let i = 0; i < numMazes; i++) {
        const sizeX = Math.floor(Math.random() * 151) + 50;
        const sizeY = Math.floor(Math.random() * 151) + 50;
        const surfaceArea = sizeX * sizeY;
  
        if (surfaceArea <= 600) {
          const stepTotal = Math.floor(Math.random() * 401) + 500;
          const keysTotal = 5;
  
          const maze = new Maze(sizeX, sizeY, stepTotal, keysTotal);
          mazes.push(maze);
        } else {
          // If the generated maze is too large, skip it and generate a new one
          i--;
        }
      }
      return mazes;
    }
  }
  