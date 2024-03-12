/* eslint-disable import/extensions */
import Queue from './queue.js';
import Graph from './graph.js';

const convertNodeToString = (nodeAsArr) => nodeAsArr.toString();
const convertNodeToArr = (nodeAsStr) => [Number(nodeAsStr[0]), Number(nodeAsStr[2])];

// Maze format
// [
//     [1,1,1,1,1],
//     [0,0,1,0,1],
//     [1,0,0,0,1],
//     [1,1,0,1,1],
//     [1,0,0,0,0],
//     [1,1,1,1,1],
// ];

// AdjacencyList format
// Map(11) {
//   '1,0' => Set(1) { '1,1' },
//   '1,1' => Set(2) { '1,0', '2,1' },
//   '1,3' => Set(1) { '2,3' },
//   '2,1' => Set(2) { '1,1', '2,2' },
//   '2,2' => Set(3) { '2,1', '3,2', '2,3' },
//   '2,3' => Set(2) { '1,3', '2,2' },
//   '3,2' => Set(2) { '2,2', '4,2' },
//   '4,1' => Set(1) { '4,2' },
//   '4,2' => Set(3) { '3,2', '4,1', '4,3' },
//   '4,3' => Set(2) { '4,2', '4,4' },
//   '4,4' => Set(1) { '4,3' }
// }

function getParentLinkMapWithBFS(adjacencyList, start) {
  const queue = new Queue();
  queue.enqueue(start.toString());

  const visited = {};
  visited[start.toString()] = true;

  const parentLink = {};

  while (queue.length > 0) {
    const currNode = queue.dequeue();
    const neighboursOfCurrentNode = adjacencyList.getNeighboors(currNode);

    neighboursOfCurrentNode.forEach((node) => {
      if (!visited[node]) {
        queue.enqueue(node);
        visited[node] = true;
        parentLink[node] = currNode;
      }
    });
  }

  return parentLink;
}

// parentLinkMap format
// {
//   '1,1': '1,0',
//   '2,1': '1,1',
//   '2,2': '2,1',
//   '3,2': '2,2',
//   '2,3': '2,2',
//   '4,2': '3,2',
//   '1,3': '2,3',
//   '4,1': '4,2',
//   '4,3': '4,2',
//   '4,4': '4,3'
// }
function constructPath(parentLinkMap, start, end) {
  let currNodeStr = convertNodeToString(end);
  const endNodeWasDiscovered = parentLinkMap[currNodeStr];
  if (!endNodeWasDiscovered) {
    return [];
  }

  const result = [];
  while (currNodeStr !== start.toString()) {
    result.push(currNodeStr);
    currNodeStr = parentLinkMap[currNodeStr];
  }
  result.push(convertNodeToString(start));
  const reversedPath = result.reverse();
  return reversedPath.map((item) => convertNodeToArr(item));
}

function convertMazeToAdjacencyList(maze) {
  const adjacencyList = new Graph();

  maze.forEach((row, i) => {
    row.forEach((elem, j) => {
      if (elem === 0) {
        adjacencyList.addNode([i, j].toString());
      }
    });
  });

  maze.forEach((row, i) => {
    row.forEach((elem, j) => {
      if (elem === 0) {
        if (maze[i - 1][j] === 0) {
          adjacencyList.addEdge([i - 1, j].toString(), [i, j].toString());
        }
        if (maze[i + 1][j] === 0) {
          adjacencyList.addEdge([i + 1, j].toString(), [i, j].toString());
        }
        if (maze[i][j - 1] === 0) {
          adjacencyList.addEdge([i, j - 1].toString(), [i, j].toString());
        }
        if (maze[i][j + 1] === 0) {
          adjacencyList.addEdge([i, j + 1].toString(), [i, j].toString());
        }
      }
    });
  });

  return adjacencyList;
}

export default function solveMaze(maze, start, end) {
  const adjacencyList = convertMazeToAdjacencyList(maze);
  const parentLinkedMap = getParentLinkMapWithBFS(adjacencyList, start);
  return constructPath(parentLinkedMap, start, end);
}
