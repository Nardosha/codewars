const task = (input) => [...new Set(input)].join('')

console.log(task([1,2,3,2,4,3])) // '1234'
console.log(task([2,2,2,1,1,1])) // '21'