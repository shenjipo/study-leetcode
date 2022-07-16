/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    dictionary.sort((a, b) => {
        return a.length - b.length
    })
    const judge = (item) => {
        let ans = item
        let MinIndex = Math.pow(2, 31)
        dictionary.forEach(dict => {
            let index = item.indexOf(dict)
            if (index >= 0 && index < MinIndex) {
                MinIndex = index
                ans = dict
            }
        })
        return ans
    }
    sentence = sentence.split(' ')
    sentence = sentence.map(item => {
        return judge(item)
    })
    return sentence.join(' ')
};
console.log(replaceWords(["a", "b", "c"],
    "aadsfasf absbs bbab cadsfafs"))

