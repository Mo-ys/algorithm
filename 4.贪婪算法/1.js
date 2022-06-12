// 集合覆盖问题

// Set
// 集合相关操作

const set1 = new Set([1, 2, 3, 4, 5, 6])
const set2 = new Set([2, 5, 9])
const set3 = new Set([1, 3])
const set4 = new Set([9, 111])

// 判断是否是子集
function isSuperset(set, subset) {
    for (let ele of subset) {
        if (!set.has(ele)) {
            return false
        }
    }
    
    return true
}

// 合并
function union(setA, setB) {
    const unionSet = new Set(setA)
    for (let ele of setB) {
        unionSet.add(ele)
    }
    return unionSet
}

// 交集
function intersection(setA, setB) {
    const intersectionSet = new Set()

    for (let ele of setB) {
        if (setA.has(ele)) {
            intersectionSet.add(ele)
        }
    }

    return intersectionSet
}

//  去掉集合之间相同的
function symmetricDifference(setA, setB) {
    const differenceSet = new Set(setA)
    
    for (let ele of setB) { 
        if (setA.has(ele)) {
            differenceSet.delete(ele)
        } else {
            differenceSet.add(ele)
        }
    }

    return differenceSet
}

// 差集
function difference(setA, setB) {
    const differenceSet = new Set(setA)

    for (let ele of setB) {
        if (setA.has(ele)) {
            differenceSet.delete(ele)
        }
    }

    return differenceSet
}

console.log(difference(set1, set2));
// console.log(union(set1, set2));

// console.log(intersection(set1, set2));

