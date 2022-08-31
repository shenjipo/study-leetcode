let targetMap = new WeakMap()
let activeEffect = null

function track(target, key) {
  if (!activeEffect) return
  let targetKeys = targetMap.get(target)
  if (!targetKeys) {
    targetKeys = new Map()
    targetMap.set(target, targetKeys)
  }
  let actions = targetKeys.get(key)
  if (!actions) {
    actions = new Set()
    targetKeys.set(key, actions)
  }
  actions.add(activeEffect)
}

function trigger(target, key) {

  let targetKeys = targetMap.get(target)
  if (targetKeys) {
    let actions = targetKeys.get(key)

    actions.forEach(item => item())
  }
}

function reactive(target) {
  const handler = {
    get(target, key, recevier) {
      track(recevier, key)
      return Reflect.get(target, key, recevier)
    },
    set(target, key, value, recevier) {
      Reflect.set(target, key, value, recevier)
      trigger(recevier, key)
    }
  }

  return new Proxy(target, handler)
}

function effect(fn) {
  activeEffect = fn
  activeEffect()
  activeEffect = null
}

function ref(initData) {
  return reactive({
    value: initData
  })
}

let count = ref(5)

let number = ref()
effect(() => {
  number.value = count.value + 5
})
function computed(fn) {
  let res = ref()
  effect(() => {
    res.value = fn()
  })
  return res
}

let ans = computed(() => {
  return number.value + 1
})
count.value++
console.log(number)
console.log(ans)