/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 这个答案超时了
var minWindow = function (s, t) {
    let Min = Math.pow(2, 31)
    let [ansleft, ansright] = [0, 0]
    let [left, right] = [0, 0]
    let [s1, s2] = [new Array(26 * 2 + 6).fill(0), new Array(26 * 2 + 6).fill(0)]
    for (let item of t) {
        s2[item.charCodeAt() - 'A'.charCodeAt()]++
    }

    const judge = (s1) => {

        for (let item of t) {
            if (s1[item.charCodeAt() - 'A'.charCodeAt()] < s2[item.charCodeAt() - 'A'.charCodeAt()]) {
                return false
            }
        }
        return true
    }
    while (right < s.length) {
        if (t.indexOf(s[right]) !== -1) {
            s1[s[right].charCodeAt() - 'A'.charCodeAt()]++
        }
        right++
        //符合条件
        while (judge(s1)) {
            //left向左移动
            if (right - left < Min) {
                Min = right - left
                ansleft = left
                ansright = right
            }
            if (t.indexOf(s[left]) !== -1) {
                s1[s[left].charCodeAt() - 'A'.charCodeAt()]--
            }
            left++
        }
    }

    if (ansright === 0) {
        return ''
    } else {
        return s.substring(ansleft, ansright)
    }
};

var minWindow3 = function (s, t) {
    let Min = Math.pow(2, 31)
    let [ansleft, ansright] = [0, 0]
    let [left, right] = [0, 0]
    let [s1, s2] = [new Array(128).fill(0), new Array(128).fill(0)]
    for (let item of t) {
        s2[item.charCodeAt()]++
    }
    let count = t.length
    while (right < s.length) {
        if (s2[s[right].charCodeAt()] > 0) {
            count--
        }
        s2[s[right].charCodeAt()]--
        right++

        if (count === 0) {
            while (left < right && s2[s[left].charCodeAt()] < 0) {
                s2[s[left].charCodeAt()]++
                left++
            }
            if (right - left + 1 < Min) {
                Min = right - left + 1
                ansleft = left
                ansright = right
            }
            s2[s[left].charCodeAt()]++
            left++
            count++
        }
    }
    if (ansright === 0) {
        return ''
    } else {
        return s.substring(ansleft, ansright)
    }
};
//                   s t
console.log(minWindow3("ADOBECODEBANC", "ABC"))


var minWindow2 = function (s, t) {
    const m = s.length, n = t.length;
    //首先创建的是need数组表示每个字符在t中需要的数量，用ASCII码来保存
    //加入need[76] = 2，表明ASCII码为76的这个字符在目标字符串t中需要两个，如果是负数表明当前字符串在窗口中是多余的，需要过滤掉
    let need = new Array(128).fill(0);
    //按照字符串t的内容向need中添加元素
    for (let i = 0; i < n; i++) {
        need[t[i].charCodeAt()]++;
    }
    /*
        l: 滑动窗口左边界
        r: 滑动窗口右边界
        size: 窗口的长度
        count: 当次遍历中还需要几个字符才能够满足包含t中所有字符的条件，最大也就是t的长度
        start: 如果有效更新滑动窗口，记录这个窗口的起始位置，方便后续找子串用
    */
    let l = 0, r = 0, size = Infinity, count = t.length, start = 0;
    //循环条件右边界不超过s的长度
    while (r < m) {
        //表示t中包含当前遍历到的这个c字符，更新目前所需要的count数大小，应该减少一个
        if (need[s[r].charCodeAt()] > 0) {
            count--;
        }
        //无论这个字符是否包含在t中，need[]数组中对应那个字符的计数都减少1，利用正负区分这个字符是多余的还是有用的
        need[s[r].charCodeAt()]--;
        //count==0说明当前的窗口已经满足了包含t所需所有字符的条件
        if (count === 0) {
            //如果左边界这个字符对应的值在need[]数组中小于0，说明他是一个多余元素，不包含在t内
            while (l < r && need[s[l].charCodeAt()] < 0) {
                //在need[]数组中维护更新这个值，增加1
                need[s[l].charCodeAt()]++;
                //左边界向右移，过滤掉这个元素
                l++;
            }
            //如果当前的这个窗口值比之前维护的窗口值更小，需要进行更新
            if (r - l + 1 < size) {
                //更新窗口值
                size = r - l + 1;
                //更新窗口起始位置，方便之后找到这个位置返回结果
                start = l;
            }
            //先将l位置的字符计数重新加1
            need[s[l].charCodeAt()]++;
            //重新维护左边界值和当前所需字符的值count
            l++;
            count++;
        }
        //右移边界，开始下一次循环
        r++;
    }
    return size == Infinity ? "" : s.substring(start, start + size);
};
