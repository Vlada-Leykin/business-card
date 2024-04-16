import Node from './node.js';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      const insertNodeToTree = (node, rootNode) => {
        if (node.data < rootNode.data) {
          if (!rootNode.left) {
            rootNode.left = node;
          } else {
            insertNodeToTree(node, rootNode.left);
          }
        }
        if (node.data > rootNode.data) {
          if (!rootNode.right) {
            rootNode.right = node;
          } else {
            insertNodeToTree(node, rootNode.right);
          }
        }
      };
      insertNodeToTree(newNode, this.root);
    }
  }

  search(data) {
    const searchInTree = (rootNode) => {
      if (!rootNode) {
        return null;
      }

      if (data === rootNode.data) {
        return rootNode;
      } if (data < rootNode.data) {
        return searchInTree(rootNode.left);
      } if (data > rootNode.data) {
        return searchInTree(rootNode.right);
      }

      return null;
    };

    return searchInTree(this.root);
  }
}

export default BinarySearchTree;
