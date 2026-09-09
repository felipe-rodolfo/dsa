let graph = new Map();
graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A", "D"]);
graph.set("D", ["B", "C"]);

function addEdge(graph, source, destination) {

    if(!graph.has(source)) {
        graph.set(source, []);
    }

    if(!graph.has(destination)) {
        graph.set(destination, []);
    }

    graph.get(source).push(destination);
    graph.get(destination).push(source);

}

addEdge(graph, "E", "F");
console.log(graph);