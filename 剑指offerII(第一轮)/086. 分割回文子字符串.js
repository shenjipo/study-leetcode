/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let ans = []
    const judge = (str) => {
        let [l, r] = [0, str.length - 1]
        while (l < r) {
            if (str[l] !== str[r]) return false
            l++
            r--
        }
        return true
    }
    const backtrace = (index, temp) => {
        if (index >= s.length) {
            ans.push([...temp])
            return
        }
        for (let i = index; i < s.length; i++) {

            if (judge(s.slice(index, i + 1))) {
                temp.push(s.slice(index, i + 1))
                backtrace(i + 1, temp)
                temp.pop()
            }
        }
    }
    backtrace(0, [])
    return ans
};

console.log(partition('google'))


