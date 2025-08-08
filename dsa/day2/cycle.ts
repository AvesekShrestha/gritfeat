// Function to detect whether the dependency structure contains any cycles, where an item indirectly or directly depends on itself.(optional)

// const deps = {
//   A: { id: 1, dependsOn: [ { id: 2 } ] },
//   B: { id: 2, dependsOn: [ { id: 3 } ] },
//   C: { id: 3, dependsOn: [ { id: 1 } ] }
// }
// Answer: true

// If there’s cycle, Find the Cycle Path 
// Answer:  [‘A’, ‘B’ , ‘C ‘, ‘ A’]



type Dependency = { id: number; dependsOn: { id: number }[] };

function detectCycleWithPath(deps: Record<string, Dependency>): { hasCycle: boolean, path?: string[] } {
    const idToKey: Record<number, string> = {};
    const graph: Record<number, number[]> = {};

    for (const [key, { id, dependsOn }] of Object.entries(deps)) {
        idToKey[id] = key;
        graph[id] = dependsOn.map(d => d.id);
    }

    const visited = new Set<number>();
    const stack = new Set<number>();
    const pathStack: number[] = [];

    function dfs(node: number): boolean {
        if (stack.has(node)) {
            const cycleStartIndex = pathStack.indexOf(node);
            const cycleIds = pathStack.slice(cycleStartIndex).concat(node);
            const cycleNames = cycleIds.map(id => idToKey[id]);
            result = { hasCycle: true, path: cycleNames };
            return true;
        }

        if (visited.has(node)) return false;

        visited.add(node);
        stack.add(node);
        pathStack.push(node);

        for (const neighbor of graph[node] || []) {
            if (dfs(neighbor)) return true;
        }

        stack.delete(node);
        pathStack.pop();
        return false;
    }

    let result: { hasCycle: boolean, path?: string[] } = { hasCycle: false };

    for (const id of Object.values(deps).map(dep => dep.id)) {
        if (!visited.has(id)) {
            if (dfs(id)) break;
        }
    }

    return result;
}

const deps = {
    A: { id: 1, dependsOn: [{ id: 2 }] },
    B: { id: 2, dependsOn: [{ id: 3 }] },
    C: { id: 3, dependsOn: [{ id: 1 }] },
};

const result = detectCycleWithPath(deps);

if (result.hasCycle) {
    console.log("Cycle detected!");
    console.log("Cycle path:", result.path);
} else {
    console.log("No cycle detected.");
}
