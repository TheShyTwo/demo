console.log('Generate array and find sum from 1 to n')

function generateArray(n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        result.push(i)
    }
    return result
}

function sum(numbers) {
    let result = 0;
    for (let i = 0; i <= numbers.length; i++) {
        result += i + 1
    }
    return result
}

console.log(sum(generateArray(10)))