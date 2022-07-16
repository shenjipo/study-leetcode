var findMaxLength = function (nums) {
    let maxLength = 0;
    const map = new Map();
    let counter = 0;
    map.set(counter, -1);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num === 1) {
            counter++;
        } else {
            counter--;
        }
        if (map.has(counter)) {
            console.log(i,map)
            const prevIndex = map.get(counter);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            map.set(counter, i);
        }
    }
    return maxLength;
};
// 0 -1
//
console.log(findMaxLength([1, 1, 0, 0, 0]))
