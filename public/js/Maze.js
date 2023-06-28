class Maze {
    // Properties
    xSize;
    ySize;
    totalStep;
    mazeGrid;
    totalKeys;
    xStart;
    yStart;
    xCurrent;
    yCurrent;
    
    // Constructor
    constructor(sizeX, sizeY, stepTotal, keysTotal) {
        this.xSize = sizeX;
        this.ySize = sizeY;
        this.totalStep = stepTotal;
        this.totalKeys = keysTotal;

        this.mazeGrid = this.createMaze();
        this.xCurrent = this.xStart;
        this.yCurrent = this.yStart;
    }

    // Methods
    
    createMaze() {
        // Setup empty grid.
        var mazeGrid = Array(this.xSize).fill().map(() => Array(this.ySize).fill(0));

        // Initialize new maze
        var nextDirection = 0;
        let nextLength = 0;

        this.xStart = Math.floor((Math.random() * (this.xSize - 2)) + 2);
        this.yStart = Math.floor((Math.random() * (this.ySize - 2)) + 2);

        var xCurrent = this.xStart;
        var yCurrent = this.yStart;

        var stepCounter = 0;

        // Create new key and lock
        let nextKey = this.totalStep / 4;
        let nextLock = 3 * nextKey;

        // Starting point of maze => green.
        mazeGrid[xCurrent][yCurrent] = 2;

        console.log(this.xStart + " " + this.yStart);

        while (stepCounter < this.totalStep) {
            var nextAxis = Math.floor((Math.random() * 2) + 1); // X-Axis = 1 | Y Axis = 2;

            // Set direction and length of the next line.
            if (nextAxis === 1) {
                if (xCurrent < 4) {
                    nextDirection = 1;
                } else if (xCurrent > this.xSize - 4) {
                    nextDirection = -1;
                } else {
                    nextDirection = Math.floor(Math.random() * 100) < 50 ? 1 : -1;
                }

                nextLength = Math.floor(Math.random() * 24) + 12;

                // Amend current grid.
                for (let x = 0; x < nextLength; ++x) {
                    xCurrent += nextDirection;
                    // Flip direction if border is reached.
                    nextDirection *= xCurrent < 4 || xCurrent > this.xSize - 4 ? -1 : 1;

                    // Change grid value.
                    if (mazeGrid[xCurrent][yCurrent] === 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                    }
                    if (stepCounter === nextKey) {
                        mazeGrid[xCurrent][yCurrent] = 4;
                    }
                    if (stepCounter === nextLock) {
                        mazeGrid[xCurrent][yCurrent] = 5;
                    }
                    stepCounter += 1;
                }
            }
            if (nextAxis === 2) {
                if (yCurrent < 4) {
                    nextDirection = 1;
                } else if (yCurrent > this.ySize - 4) {
                    nextDirection = -1;
                } else {
                    nextDirection = Math.floor(Math.random() * 100) < 50 ? 1 : -1;
                }

                nextLength = Math.floor(Math.random() * 20) + 10;

                for (let y = 0; y < nextLength; ++y) {
                    yCurrent += nextDirection;
                    nextDirection *= yCurrent < 4 || yCurrent > this.ySize - 4 ? -1 : 1;

                    if (mazeGrid[xCurrent][yCurrent] === 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                    }
                    if (stepCounter === nextKey) {
                        mazeGrid[xCurrent][yCurrent] = 4;
                    }
                    if (stepCounter === nextLock) {
                        mazeGrid[xCurrent][yCurrent] = 5;
                    }
                    stepCounter += 1;
                }
            }       
        }

        mazeGrid[xCurrent][yCurrent] = 3;
        return mazeGrid;
    }

    renderMaze(x, y) {
        const centerX = Math.max(Math.min(x, this.xSize - 2), 1);
        const centerY = Math.max(Math.min(y, this.ySize - 2), 1);
        const startX = centerX - 1;
        const startY = centerY - 1;
        const endX = startX + 2;
        const endY = startY + 2;

        for (let row = startY; row <= endY; row++) {
            let rowString = "";
            for (let col = startX; col <= endX; col++) {
                rowString += this.mazeGrid[col][row] + " ";
            }
            console.log(rowString);
        }
    }
}
