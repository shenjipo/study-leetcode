/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort((a,b) => {
        return a-b
    })
    let ans = []
    while(k--){
        ans.push(arr.shift())
    }
    return ans
};