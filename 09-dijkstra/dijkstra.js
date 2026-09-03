class MinHeap {

    constructor() {
        this.heap = []
    }

    insert(element) {
        this.heap.push(element);

        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {

            let currentParent = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex].distance < this.heap[currentParent].distance){
                let tmp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[currentParent];
                this.heap[currentParent] = tmp;
                currentIndex = currentParent
            } else {
                break;
            }
            
        }
    }

    extractMin() {
        let min = this.heap[0];
        let lastItem = this.heap.pop();

        if(this.heap.length) {
            this.heap[0] = lastItem;
        }

        let currentIndex = 0;

        while(true) {
            let smallerChildIndex = this.getSmallerChildIndex(currentIndex);
            if (smallerChildIndex == null) {
                break;
            }

            if (this.heap[currentIndex].distance > this.heap[smallerChildIndex].distance) {
                let tmp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[smallerChildIndex];
                this.heap[smallerChildIndex] = tmp;
                currentIndex = smallerChildIndex;
            } else {
                break;
            }
        }

        return min;
    }

    getSmallerChildIndex(currentIndex) {
        let leftChild = 2 * currentIndex + 1;
        let rightChild = 2 * currentIndex + 2;

        if (leftChild >= this.heap.length) {
            return null;
        }

        if (rightChild >= this.heap.length) {
            return leftChild;
        }

        if (this.heap[leftChild].distance > this.heap[rightChild].distance) {
            return rightChild;
        }
        return leftChild;
    }

    isEmpty(){
        return this.heap.length === 0;
    }
}

const graph = new Map();
graph.set("A", [ {vertex: "B", weight: 4}, { vertex: "C", weight: 2}]);
graph.set("B", [ {vertex: "E", weight: 3}, { vertex: "D", weight: 1}, { vertex: "A", weight: 4}]);
graph.set("C", [ {vertex: "A", weight: 2}, { vertex: "D", weight: 5}]);
graph.set("D", [ {vertex: "C", weight: 5}, { vertex: "B", weight: 1}, { vertex: "F", weight: 2}]);
graph.set("E", [ {vertex: "B", weight: 3}]);
graph.set("F", [ {vertex: "D", weight: 2}]);

function dijkstra(graph, source, destination) {
    let distances = new Map();
    let previous = new Map();
    let visited = new Set();

    for (const vertex of graph.keys()) {
        if (vertex === source) {
            distances.set(vertex, 0);
        } else {
            distances.set(vertex, Infinity);
        }
    }

    for (const vertex of graph.keys()) {
        previous.set(vertex, null);
    }

    let priorityQueue = new MinHeap();
    priorityQueue.insert({vertex: source, distance: 0});

    while (!priorityQueue.isEmpty()) {
        let current = priorityQueue.extractMin();
        if(visited.has(current.vertex)) continue;
        visited.add(current.vertex);
        if(current.vertex === destination) break;
        for (const neighbor of graph.get(current.vertex)) {
            if (visited.has(neighbor.vertex)) continue;

            let newDistance = distances.get(current.vertex) + neighbor.weight;

            if (newDistance < distances.get(neighbor.vertex)) {
                distances.set(neighbor.vertex, newDistance); 
                previous.set(neighbor.vertex, current.vertex);
                priorityQueue.insert({vertex: neighbor.vertex, distance: newDistance})
            }
        }
    }

    let path = [];
    let step = destination;
    while (step !== null) {
        path.unshift(step);
        step = previous.get(step)
    }
    return { distance: distances.get(destination), path: path}
}

console.log(dijkstra(graph, "A","F"));