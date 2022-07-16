var KthLargest = function (k, nums) {
    this.k = k;
    this.pq = new MinPriorityQueue({compare: (a, b) => a - b});
    for (const n of nums) this.pq.enqueue(n);
};

KthLargest.prototype.add = function (val) {
    this.pq.enqueue(val);
    if (this.pq.size() < this.k) return -1;
    while (this.pq.size() > this.k) this.pq.dequeue();
    return this.pq.front();
};


