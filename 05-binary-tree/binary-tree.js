class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    search(value) {
        let current = this.root;

        while(current){
            if(value == current.value) {
                return true;
            }

            if(value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    insert(value) {
        
        if(this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;

        while(current) {
            if(value < current.value) {
                if(current.left == null) {
                    current.left = new Node(value);
                    return;
                } else {
                    current = current.left
                }
            }

            if(value > current.value) {
                if(current.right == null) {
                    current.right = new Node(value);
                    return;
                } else {
                    current = current.right
                }
            }
        }
    }

    inorder(node) {

        if(node === null) return;

        this.inorder(node.left);
        console.log(node.value)
        this.inorder(node.right);
    }
}

let bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(7);

console.log(bst.search(4));
console.log(bst.search(10));

bst.inorder(bst.root)