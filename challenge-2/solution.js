const fibonacci = (n) => {
    if(n<8) return 2
    const fibArray = [,1,1,2]
    let sum = 0
    for (let i = 3; fibArray[i] < n; i++) {
        fibArray.push(fibArray[i]+fibArray[i-1])
        if(fibArray[i]%2===0) sum = sum+fibArray[i]
    }
    return {sum,fibArray};
}

console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(100))
console.log(fibonacci(4000000))