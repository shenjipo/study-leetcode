var reconstructQueue = function (people) {
    let ans = [];
    people.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
    });
    console.log(people)
    for (let i = 0; i < people.length; i++) {
        ans.splice(people[i][1], 0, people[i]);
        console.log(ans)
    }
    return ans;
};

var reconstructQueue2 = function (people) {
    let ans = []
    people.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
    })


    for (let i = 0; i < people.length; i++) {
        ans.splice(people[i][1], 0, people[i])
    }
    return ans
};
reconstructQueue2([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])