class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(data: number): void {
        const newNode = new TreeNode(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current: TreeNode | null = this.root;

        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    search(data: number): boolean {
        let current: TreeNode | null = this.root;

        while (current !== null) {
            if (data === current.data) {
                return true;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    inorder(node: TreeNode | null = this.root, result: number[] = []): number[] {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.data);
            this.inorder(node.right, result);
        }
        return result;
    }
}


const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.search(7));
console.log(bst.search(20));
console.log(bst.inorder());
