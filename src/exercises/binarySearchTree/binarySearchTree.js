import Node from './node.js';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data) {
    if (this.root === null) {
      this.root = new Node(data);
    }
  }

  searchNode(data) {
    if (this.root.data === data) {
      return this.root;
    }

    return null;
  }
}

export default BinarySearchTree;
