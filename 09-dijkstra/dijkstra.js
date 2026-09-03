class MinHeap {

    constructor() {
        this.head = []
    }

    insert(element) {
        this.head.push(element);

        let currentIndex = this.head.length - 1;
        while (currentIndex > 0) {

            let currentParent = Math.floor((currentIndex - 1) / 2);

            if (this.head[currentIndex].distance < this.head[currentParent].distance){
                let tmp = this.head[currentIndex];
                this.head[currentIndex] = this.head[currentParent];
                this.head[currentParent] = tmp;
                currentIndex = currentParent
            } else {
                break;
            }
            
        }
    }

    extractMin() {
        let min = this.head[0];
        let lastItem = this.head.pop();

        if(this.head.length) {
            this.head[0] = lastItem;
        }

        let currentIndex = 0;

        return min;
    }

    getSmallerChildIndex(currentIndex) {
        let leftChild = 2 * currentIndex + 1;
        let rightChild = 2 * currentIndex + 2;

        if (leftChild >= this.head.length) {
            return null;
        }

        if (rightChild >= this.head.length) {
            return leftChild;
        }

        if (this.head[leftChild].distance > this.head[rightChild].distance) {
            return rightChild;
        }
        return leftChild;
    }
}