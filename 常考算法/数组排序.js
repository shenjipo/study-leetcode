// 数组的归并排序
function Merge(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let [left, right] = [arr.slice(0, middle), arr.slice(middle)]
    let leftArray = Merge(left)
    let rightArray = Merge(right)
    let res = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            res.push(leftArray.shift())
        } else {
            res.push(rightArray.shift())
        }
    }

    return res.concat(leftArray, rightArray)
}

// console.log(Merge([4, 1, 3, 6, 9, 78, 2, 1, 4, 6]))

// 数组的快速排序

function fastSort(arr, begin, end) {
    if (begin > end) {
        return
    }
    let temp = arr[begin]
    let [left, right] = [begin, end]
    while (left < right) {
        while (arr[right] >= temp && left < right) {
            right--
        }
        while (arr[left] <= temp && left < right) {
            left++
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    arr[begin] = arr[left]
    arr[left] = temp

    fastSort(arr, begin, left - 1)
    fastSort(arr, left + 1, end)
}

let nums1 = [4, 1, 3, 6, 9, 78, 2, 1, 4, 6]
fastSort(nums1, 0, nums1.length - 1)
console.log(nums1)

//数组的堆排序
class MyHeap {
    constructor(compare) {
        this.heap = []
        this.compare = compare
    }

    getParentIndex(i) {
        return i >> 1
    }

    swap(i, j) {
        [this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]]
    }

    // 在堆的末尾插入一个元素，然后向上调整堆
    climbUp(index) {
        if (index === 0) {
            return
        }
        let parentIndex = this.getParentIndex(index)
        if (this.compare(this.heap[index], this.heap[parentIndex])) {
            this.swap(index, parentIndex)
            this.climbUp(parentIndex)
        }
    }

    // 插入元素
    insert(value) {
        this.heap.push(value)
        this.climbUp(this.heap.length - 1)
    }

    // 删除堆顶元素，然后调整堆
    pop() {
        this.heap[0] = this.heap.pop()
        this.climbDown(0)
    }

    // 从上到下调整顺序
    climbDown(parentIndex) {
        let [left, right] = [parentIndex * 2, parentIndex * 2 + 1]
        if (left < this.heap.length && this.compare(this.heap[left], this.heap[parentIndex])) {
            this.swap(left, parentIndex)
            this.climbDown(left)
        }
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[parentIndex])) {
            this.swap(right, parentIndex)
            this.climbDown(right)
        }
    }

    // 获取堆的大小
    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0]
    }
}

// 链表的归并排序
// 链表归并排序
function sortList(head) {
    if (head === null || head.next === null) {
        return head
    }
    let [slow, fast] = [head, head.next]
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let arr2left = slow.next
    slow.next = null
    let left = sortList(head)
    let right = sortList(arr2left)
    let res = new ListNode(-1)
    let temp = res
    while (left && right) {
        if (left.val < right.val) {
            temp.next = left
            left = left.next
        } else {
            temp.next = right
            right = right.next
        }
        temp = temp.next
    }
    temp.next = left === null ? right : left
    return res.next
}


