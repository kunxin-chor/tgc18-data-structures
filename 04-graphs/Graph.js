class Graph {
    constructor() {
        // use an object to store the nodes
        // to create a look up table
        // so we can use the `id` of a node
        // to get the node itself
        this.nodes = {}
    }

    // two arguments
    // 1st arg: the id (unique) of the node
    // 2nd arg: the node itself
    addNode(id, node) {
        this.nodes[id] = node;
    }

    addEdge(startNodeID, endNodeID) {
        const startNode = this.nodes[startNodeID];
        const endNode = this.nodes[endNodeID];

        // make sure that start node and end node are not already connected
        // by an edge
        if (startNode.getNeighbours().map(n=>n.node).includes(endNode)) {
            return;
        }

        if (endNode.getNeighbours().map(n=>n.node).includes(startNode)){
            return;
        }

        if (startNode && endNode) {
            startNode.addNeighbour(endNode);
            endNode.addNeighbour(startNode);
        }
    }

    bfs(startNodeID) {
        const startNode = this.nodes[startNodeID];
    }
}

module.exports = Graph;