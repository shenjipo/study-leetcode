/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = []
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0 || stack[stack.length - 1] < 0 || !stack.length) {
            stack.push(asteroids[i])
        }
        else {//对于不满足入栈条件的行星（左边有正数行星的负数行星）我们对其进行碰撞检测
            let temp = stack.pop()//从栈中取出末尾正数行星
            if (asteroids[i] + temp > 0) {//正数行星较大则将取出的正数星星重新入栈
                stack.push(temp)
            }
            else if (asteroids[i] + temp < 0) {//负数行星较大则将此负数行星再次放入循环处理
                i = i - 1
            }
            //两星星大小相同，跳过，处理下一个行星
        }
    }
    return stack
};
asteroidCollision([10, 2, -5])

