// 双指针解法
const countSubstrings = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = 0;

    for (let i = 0; i < 2 * strLen - 1; i++) {
        //向下取整
        let left = Math.floor(i / 2);
        let right = left + i % 2;

        while (left >= 0 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
            left--;
            right++;
        }
    }

    return numOfPalindromicStr;
}


// 双指针解法分开写
const countSubstrings3 = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = strLen;

    for (let i = 0; i < strLen; i++) {
        //向下取整
        let left = i - 1
        let right = i + 1;

        while (left > -1 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
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
            left--;
            right++;
        }
    }

    return numOfPalindromicStr;
}

// 暴力解法
const countSubstrings2 = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = 0;

    for (let i = 0; i < strLen; i++) {
        for (let j = i; j < strLen; j++) {
            let left = i;
            let right = j;
            let flag = true;
            while (left <= right) {

                if (s[left] !== s[right]) {
                    flag = false;
                    break
                } else {
                    left++;
                    right--;
                }

            }

            if (flag) {

                numOfPalindromicStr++;
            }
        }
    }

    return numOfPalindromicStr;
}

console.log(countSubstrings3('abc'))