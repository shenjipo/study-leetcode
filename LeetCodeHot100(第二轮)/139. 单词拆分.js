/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length).fill(0)
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let temp = s.slice(i, j)
            if (wordDict.indexOf(temp) !== -1) {
                if (i - 1 < 0 || dp[i - 1] === 1) {
                    dp[i] = 1
                }
            }
        }
    }
    return dp[s.length - 1]
};

var wordBreak2 = function (s, wordDict) {
    let dp = [];
    if (wordDict.length === 0) {
        return false;
    }
    if (s.length === 1) {
        if (wordDict.indexOf(s) === -1) {
            return false;
        } else {
            return true;
        }
    }
    let len = s.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (wordDict.indexOf(s.slice(i, j + 1)) !== -1) {
                if (dp[i - 1] === true || i - 1 < 0) {
                    dp[j] = true;
                }
            }
        }
    }
    return dp[len - 1] ? true : false
};


