function isFibonacci(num: number): number{
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if(num < 0){
        return -1;
    }else if (num == 0 || num ==1){
        return num;
    }
    else{
        for(let i = 2; i < num; i++){
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
 let sum = 0;
 console.log("10 so dau tien trong day fibonacci");
 for (let i = 0; i < 10; i ++){
     console.log(isFibonacci(i) + " ");
    sum += isFibonacci(i);
 }
 console.log("Tong 10 so fibonacci dau tien la:" + sum);
 

