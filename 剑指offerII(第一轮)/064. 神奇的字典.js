var MagicDictionary = function () {
    this.dict = new Set();
};

MagicDictionary.prototype.buildDict = function (dictionary) {
    for (const w of dictionary) this.dict.add(w);
};

MagicDictionary.prototype.search = function (searchWord) {
    for (let i = 0; i < searchWord.length; i++) {
        const pre = searchWord.slice(0, i), post = searchWord.slice(i + 1);
        for (let j = 97; j < 123; j++) {
            const c = String.fromCharCode(j);
            if (c === searchWord[i]) continue;
            if (this.dict.has(pre + c + post))
                return true;
        }
    }

    return false;
};

let a = '123456'
console.log(a.slice(0, 3), a.slice(3))
