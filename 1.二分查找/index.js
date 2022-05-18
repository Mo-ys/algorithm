const list = [1,2,4]; // 保证有序

function binarySearch(arr, n) {
    if (!arr && arr.length <= 0) return null
    let start = 0
    let end = arr.length - 1
    while (start <= end) { //缩小到只有一个数的范围
        let mid = Math.floor(start + (end - start) / 2) // 取中间的索引 偶数向下取整
        let midVal = arr[mid]
        if (midVal === n) return mid;
        if (midVal < n) {
            start = mid - 1;
        } else {
            end = mid - 1;
        }
    }
    return null
}

console.log(binarySearch(list, 1));