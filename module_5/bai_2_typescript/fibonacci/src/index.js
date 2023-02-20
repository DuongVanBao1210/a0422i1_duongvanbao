function isFibonacci(num) {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;
    if (num < 0) {
        return -1;
    }
    else if (num == 0 || num == 1) {
        return num;
    }
    else {
        for (var i = 2; i < num; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
var sum = 0;
console.log("10 so dau tien trong day fibonacci");
for (var i = 0; i < 10; i++) {
    console.log(isFibonacci(i) + " ");
    sum += isFibonacci(i);
}
console.log("Tong 10 so fibonacci dau tien la:" + sum);
