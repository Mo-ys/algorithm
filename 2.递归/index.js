// D&C算法 分而治

// 基线条件 最简单的能达到目的的条件（结束递归）
// 递归条件 缩小范围

// 均匀最大切分土地
// 欧几里得算法（辗转相除法，最大公约数）

function splitLand(length, width) {
    if (length / 2 === width) { // 基线条件
        return width;
    } else {  // 递归条件
        let reLength = length - width;
        if (reLength < width) { 
            length = width;
            width = reLength;
        } else {
            length = reLength;
        }
        return splitLand(length, width);
    }
}

// console.log(splitLand(1680, 640));

// 快速排序

function quickSort(list) {
    if (list.length <= 1) { // 基线条件
        return list;
    }
    // 递归条件
    const benchmarkIndex = Math.floor(list.length / 2)
    const benchmark = list[benchmarkIndex]
    const beforeArr = [];
    const afterArr = [];
    list.forEach((item, i) => {
        if (i === benchmarkIndex) return;
        if (item <= benchmark) {
            beforeArr.push(item);
        } else {
            afterArr.push(item);
        }
    })
    return [...quickSort(beforeArr), benchmark, ...quickSort(afterArr)];
}

console.log(quickSort([3,4,2,632,757,222,677,335,13,567,885,88,97,653]));