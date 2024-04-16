import BinarySearchTree from '../src/exercises/binarySearchTree/binarySearchTree.js';

describe('insertion', function () {
    describe('root', function () {
        it('should insert a node to a binary search tree as a root', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            let root = binarySearchTree.searchNode(5);

            expect(root.data).toEqual(5);
            expect(root.right).toBeNull();
            expect(root.left).toBeNull();
        });
    });

    describe('left wing', function () {
        it('should insert a node to a binary search tree to the 2 level', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(3);
            let root = binarySearchTree.searchNode(5);

            expect(root.data).toEqual(5);
            expect(root.right).toBeNull();
            expect(root.left.data).toEqual(3);
        });

        it('should insert a node to a binary search tree to the 3 level', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(3);
            binarySearchTree.insert(1);
            let root = binarySearchTree.searchNode(5);

            expect(root.data).toEqual(5);
            expect(root.right).toBeNull();

            expect(root.left.left.data).toEqual(1);
        });
    });

    describe('right wing', function () {
        it('should insert a node to a binary search tree to the 2 level', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(7);
            let root = binarySearchTree.searchNode(5);

            expect(root.data).toEqual(5);
            expect(root.left).toBeNull();

            expect(root.right.data).toEqual(7);
        });

        it('should insert a node to a binary search tree to the 2 level', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(7);
            binarySearchTree.insert(10);
            let root = binarySearchTree.searchNode(5);

            expect(root.data).toEqual(5);
            expect(root.left).toBeNull();

            expect(root.right.right.data).toEqual(10);
        });
    });

    describe('full tree', function () {
        it('should insert a node to a binary search tree to the 2 level', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(7);
            binarySearchTree.insert(1);
            let root = binarySearchTree.searchNode(5);
            
            expect(root.data).toEqual(5);
            expect(root.left.data).toEqual(1);
            expect(root.right.data).toEqual(7);

            expect(root.right.right).toBeNull();
            expect(root.right.left).toBeNull();
            expect(root.left.left).toBeNull();
            expect(root.left.right).toBeNull();
        });   
        it('should validate proper insertion', function () {
            let binarySearchTree = new BinarySearchTree()
            binarySearchTree.insert(5);
            binarySearchTree.insert(7);
            binarySearchTree.insert(1);
            binarySearchTree.insert(10);
            binarySearchTree.insert(8);
            binarySearchTree.insert(3);
            binarySearchTree.insert(4);
            binarySearchTree.insert(6);
            let root = binarySearchTree.searchNode(5);
            
            //----- 1 level------
            expect(root.data).toEqual(5);
            expect(root.left.data).toEqual(1);
            expect(root.right.data).toEqual(7);
            //----- 2 level------
            expect(root.right.right.data).toEqual(10);
            expect(root.right.left.data).toEqual(6);
            expect(root.left.right.data).toEqual(3);
            expect(root.left.left).toBeNull();
            //----- 3 level------
            expect(root.right.right.right).toBeNull();
            expect(root.right.right.left.data).toEqual(8);
            expect(root.right.left.right).toBeNull();
            expect(root.right.left.left).toBeNull();
            expect(root.left.right.right.data).toEqual(4);
            expect(root.left.right.left).toBeNull();
        });     
    });
});