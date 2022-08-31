function MyInterval(fn, delay) {
  let timer

  function interval() {
    timer = setTimeout(() => {
      fn()
      interval()
    }, delay)
  }

  interval()
  return timer
}

let timer = MyInterval(() => {
  console.log(666)
}, 500)
// clearTimeout(timer)