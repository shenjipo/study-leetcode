var generateParenthesis = function (n) {
    let res = [];
    let dfs = (str, l, r) => {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        if (l < n) {
            dfs(str + '(', l + 1, r);
        }
        if (l > r) {
            dfs(str + ')', l, r + 1);
        }
    }
    dfs('', 0, 0);
    return res;
};

console.log(generateParenthesis(4))
