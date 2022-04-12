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


const findKthLargest = (nums, k) => {
    const minHeap = new MyHeap((a, b) => a < b)
    for (let num of nums) {
        minHeap.insert(num)
        if (minHeap.size() > k) minHeap.pop()
    }
    console.log(minHeap.heap)
    return minHeap.peek();
};
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
