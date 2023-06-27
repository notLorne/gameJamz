class GameInitializer {
    constructor() {
      this.assets = null;
      this.loadedAssets = {};
    }
  
    initialize() {
      this.loadAssets()
        .then(() => {
          this.preloadAssets();
          this.startGame();
        })
        .catch(error => {
          console.error('Error initializing the game:', error);
        });
    }
  
    loadAssets() {
      return fetch('/assets/assetsList.json')
        .then(response => response.json())
        .then(data => {
          this.assets = data;
        });
    }
  
    preloadAssets() {
      if (!this.assets) {
        console.error('No assets loaded. Please ensure assets are loaded before preloading.');
        return;
      }
  
      const imagePromises = Object.entries(this.assets.images).map(([name, path]) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = () => {
            this.loadedAssets[name] = img;
            resolve();
          };
          img.onerror = reject;
        });
      });
  
      const audioPromises = Object.entries(this.assets.audio).map(([name, path]) => {
        return new Promise((resolve, reject) => {
          const audio = new Audio();
          audio.src = path;
          audio.oncanplaythrough = () => {
            this.loadedAssets[name] = audio;
            resolve();
          };
          audio.onerror = reject;
        });
      });
  
      return Promise.all([...imagePromises, ...audioPromises]);
    }
  
    startGame() {
      // Perform any other necessary initialization actions
      // Start your game logic here
  
      // Example usage: Access the preloaded assets by their names
      const image = this.loadedAssets['imageName'];
      const audio = this.loadedAssets['audioName'];
  
      console.log('Game started!');
    }
  }
  
//   // Usage:
//   const game = new GameInitializer();
//   game.initialize();
  