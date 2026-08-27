
const graph = {
    A: ["C", "E"],
    B: ["K", "B"],
    C: ["A", "C"],
    D: ["D", "B"],
    E: ["A", "C"],
}

function dfs(graph, node, visited) {
    console.log(node);
    visited.add(node);
    for(const neighbor of graph[node]){
        if(!visited.has(neighbor)) {
            dfs(graph, neighbor, visited)
        }
    }
}

let visited = new Set();
dfs(graph, "A", visited);