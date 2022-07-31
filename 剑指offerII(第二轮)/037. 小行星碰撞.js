/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []
    let i = 0
    while (i < asteroids.length) {
        if (asteroids[i] > 0 || !stack.length) {
            stack.push(asteroids[i])
        } else {
            let top = stack.pop()
            if (top < 0) {
                stack.push(top)
                stack.push(asteroids[i])
            } else if (top > 0 && top + asteroids[i] > 0) {
                stack.push(top)
            } else if (top + asteroids[i] < 0) {
                i--
            }
        }
        i++
    }
    return stack
};