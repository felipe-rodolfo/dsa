function bfs(graph, start) {
    let queue = [];
    let visited = new Set();
    visited.add(start);
    queue.push(start);

    while(queue.length > 0) {
        let current = queue.shift();

        let values = graph.get(current);
        for(const value of values) {
            if(visited.has(value)) continue;
            visited.add(value);
            queue.push(value);
        }
    }

    return [...visited];
}

let graph = new Map();
graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A", "D"]);
graph.set("D", ["B", "C"]);

console.log(bfs(graph, "A"));