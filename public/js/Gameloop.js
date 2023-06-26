class Gameloop {
    constructor(update, render, frameRate = 60) {
      this.update = update;
      this.render = render;
      this.frameRate = frameRate;
      this.previousTime = 0;
      this.deltaTime = 0;
      this.isRunning = false;
      this.interval = 1000 / this.frameRate;
    }
  
    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      this.previousTime = performance.now();
      this.loop();
    }
  
    stop() {
      if (!this.isRunning) return;
      this.isRunning = false;
    }
  
    loop() {
      if (!this.isRunning) return;
  
      const currentTime = performance.now();
      this.deltaTime = (currentTime - this.previousTime) / 1000; // Convert to seconds
  
      if (this.deltaTime >= this.interval) {
        this.update(this.deltaTime);
        this.render();
        this.previousTime = currentTime;
      }
  
      requestAnimationFrame(() => this.loop());
    }
  }
  
  export default Gameloop;
  