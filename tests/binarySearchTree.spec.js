import BinarySearchTree from '../src/exercises/binarySearchTree/binarySearchTree.js';

describe('simple case', function() {
    it('should insert a node to a binary search tree as a root', function() {
        let binarySearchTree = new BinarySearchTree()
        binarySearchTree.insertNode(5);
        let singeNode = binarySearchTree.searchNode(5);

        expect(singeNode.data).toEqual(5);
        expect(singeNode.right).toBeNull();
        expect(singeNode.left).toBeNull();
    });
});