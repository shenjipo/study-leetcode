// 双指针解法分开写
const countSubstrings3 = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = strLen;
    let ans_left = 0;
    let ans_right = 0;
    let max_len = 0;
    for (let i = 0; i < strLen; i++) {
        //向下取整
        let left = i - 1
        let right = i + 1;

        while (left > -1 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
            if (right - left + 1 > max_len) {
                max_len = right - left + 1
                ans_left = left;
                ans_right = right;
            }

            left--;
            right++;
        }
    }

    for (let i = 0; i < strLen - 1; i++) {
        //向下取整
        let left = i
        let right = i + 1;

        while (left > -1 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
            if (right - left + 1 > max_len) {
                max_len = right - left + 1
                ans_left = left;
                ans_right = right;
            }
            left--;
            right++;
        }
    }

    return s.substring(ans_left,ans_right+1);
}

console.log(countSubstrings3('cbbd'))