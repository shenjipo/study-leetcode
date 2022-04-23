// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// var restoreIpAddresses = function (s) {
//     let ans = []
//     const judge = (num) => {
//         return (num[0] !== '0' && parseInt(num) <= 255) || num === '0'
//     }
//     const backtrace = (index, temp) => {
//         // console.log(temp, temp.length, index)
//         if (index === s.length && temp.length === 4) {
//             ans.push([...temp].join(','))
//             return
//         }
//         if (index > s.length || temp.length > 4) {
//             return
//         }
//         for (let i = index; i < s.length && i < index + 3; i++) {
//             if (judge(s.slice(index, i + 1))) {
//                 temp.push(s.slice(index, i + 1))
//                 backtrace(i + 1, temp)
//                 temp.pop()
//             }
//         }
//     }
//     backtrace(0, [])
//     return ans
// };
// console.log(restoreIpAddresses('25525511135'))
function F() {
    this.name = 'wang'
    let age = 30
}

let a = new F()
console.log(a.name, a.age)
