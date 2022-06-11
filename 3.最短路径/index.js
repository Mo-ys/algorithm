// 狄克斯特拉算法
// 有向正加权图的加权最短路径

// 三个散列表,一个记录处理过的节点数组

// 存各节点的邻居节点的权重 图
const graph = {
    start: { a: 6, b: 2 },
    a: { 'end': 1 },
    b: { a: 3, end: 5 },
    end: {}
}

// 存前往各节点的开销
const costs = {
    a: 6,
    b: 2,
    end: Infinity,
}

// 父节点
const parents = {
    a: 'start',
    b: 'start',
    end: null,
}

// 在开销表中找到最低且没有处理过的节点
// 找这个节点的邻居节点开销最低的并更新开销表（从起点到对应节点的开销）和父节点表
// 回到第一步 直到没有接处理



function findShortestPath(startNode, endNode, graph) {
    // 初始化 
    const costs = { ...graph[startNode], [endNode]: Infinity };
    const parents = {};
    const handledNodes = [startNode];

    // 找到开销表中最低且没有处理过的
    function findCostsShortest() {
        let low = Infinity
        let lowNode = null
        for (const prop in costs) {
            if (costs[prop] < low && !handledNodes.includes(prop)) {
                low = costs[prop]
                lowNode = prop
            }
        }
        return lowNode
    }

    for (const props in graph[startNode]) {
        parents[props] = startNode
    }
    parents[endNode] = null



    // 找到开销表中最低且没有处理过的
    let node = findCostsShortest()
    while (node) {
        console.log("==", node);
        for (const prop in graph[node]) {
            const newCost = costs[node] + graph[node][prop]
            // 如果这个节点还没有加入消费表中或者比原来的小
            if (costs[prop] === undefined || newCost < costs[prop]) {
                costs[prop] = newCost
                parents[prop] = node
            }
        }
        handledNodes.push(node)
        node = findCostsShortest()
    }

    let pathArr = ['end']
    let targetNode = parents[endNode]

    while (targetNode !== startNode) {
        pathArr.push(targetNode)
        targetNode = parents[targetNode]
    }
    pathArr.push(startNode)

    return pathArr.reverse()
}

// console.log("result", findShortestPath('start', 'end', {
//     start: {A: 5, B: 2},
//     A: {C: 4, D: 2},
//     B: {A: 8, D: 7},
//     C: {end: 3, D: 6},
//     D: {C: 6, end: 1},
//     end: {}
// }));

console.log("result", findShortestPath('start', 'end', {
    start: { A: 10 },
    A: { C: 20 },
    B: { A: 1},
    C: { B: 1, end: 30},
    end: {}
}));


console.log(1 > undefined);