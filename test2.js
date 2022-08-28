let dest, res
dest = {id: 'dest'}
res - Object.assign(dest, {id: 'src1', a: 'foo'}, {id: 'src2', b: 'bar'})
console.log(dest)