// 885. Spiral Matrix III
// Solved
// Medium
// Topics
// Companies
// You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

// You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

// Return an array of coordinates representing the positions of the grid in the order you visited them.

 

// Example 1:


// Input: rows = 1, cols = 4, rStart = 0, cStart = 0
// Output: [[0,0],[0,1],[0,2],[0,3]]
// Example 2:


// Input: rows = 5, cols = 6, rStart = 1, cStart = 4
// Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
 

// Constraints:

// 1 <= rows, cols <= 100
// 0 <= rStart < rows
// 0 <= cStart < cols

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
function spiralMatrixIII(rows, cols, rStart, cStart) {
    const result = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // right, down, left, up
    let steps = 1;  // Number of steps to move in the current direction
    let dirIndex = 0;  // Index to track the current direction

    result.push([rStart, cStart]);
    
    while (result.length < rows * cols) {
        for (let i = 0; i < 2; i++) {  // Each direction will be visited twice
            for (let j = 0; j < steps; j++) {
                rStart += directions[dirIndex][0];
                cStart += directions[dirIndex][1];

                if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                    result.push([rStart, cStart]);
                }
            }
            dirIndex = (dirIndex + 1) % 4;  // Change direction
        }
        steps++;  // Increment the steps after two directions
    }

    return result;
}