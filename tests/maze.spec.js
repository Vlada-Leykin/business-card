import solveMaze from '../src/exercises/bfs/maze.js';


describe('simple maze', function() {
    it('should return a path from start to end', function() {
        let maze = [
            [1,1,1,1,1],
            [0,0,1,0,1],
            [1,0,0,0,1],
            [1,1,0,1,1],
            [1,0,0,0,0],
            [1,1,1,1,1],
        ];

        let path = solveMaze(maze, [1,0], [4,4]);

        expect(path).toEqual([[1,0],[1,1],[2,1],[2,2],[3,2],[4,2],[4,3],[4,4]]);
    });

    it('should return a empty array, when there is no possible solution', function() {
        let maze = [
            [1,1,1,1,1],
            [0,0,1,0,1],
            [1,0,0,0,1],
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,1,1],
        ];

        let path = solveMaze(maze, [1,0], [4,4]);

        expect(path).toEqual([]);
    });
  });
  