const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "E"],
    D: ["B", "E"],
    E: ["C", "D"]
};

function bfs(graph, start) {
    const visited = new Set();
    const queue = [];

    queue.push(start);
    visited.add(start);

    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node)
        for (const neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

    }
}

bfs(graph, "A");