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
      const insertNodeToTree = (rootNode, node) => {
        if (node.data < rootNode.data) {
          if (!rootNode.left) {
            rootNode.left = node;
          } else {
            insertNodeToTree(rootNode.left, node);
          }
        }
        if (node.data > rootNode.data) {
          if (!rootNode.right) {
            rootNode.right = node;
          } else {
            insertNodeToTree(rootNode.right, node);
          }
        }
      };
      insertNodeToTree(this.root, newNode);
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

  delete(data) {
    const isLeafNode = (node) => !node.left && !node.right;
    const hasOnlyLeftChild = (node) => node.left && !node.right;
    const hasOnlyRightChild = (node) => !node.left && node.right;

    const searchInTreeAndDelete = (rootNode) => {
      if (data === rootNode.data) {
        if (isLeafNode(rootNode)) {
          return null;
        } if (hasOnlyLeftChild(rootNode)) {
          return rootNode.left;
        } if (hasOnlyRightChild(rootNode)) {
          return rootNode.right;
        }
      } if (data < rootNode.data) {
        rootNode.left = searchInTreeAndDelete(rootNode.left);
      } else if (data > rootNode.data) {
        rootNode.right = searchInTreeAndDelete(rootNode.right);
      }

      return rootNode;
    };

    this.root = searchInTreeAndDelete(this.root);
  }
}

export default BinarySearchTree;
