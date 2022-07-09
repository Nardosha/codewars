//! First solution
// const countBrackets = (input) => {
//     const inputStr = input.replace(/\w/gi, '').split('')
//
//     for (let i = 0; i < inputStr.length; i++) {
//         let start = inputStr[i]
//         let endIdx = inputStr.length-1-i
//         let end = inputStr[endIdx]
//
//         if (start === end) {
//             return false
//         }
//     }
//     return true
// }

//! Second solution
const countBrackets = (input) => input
    .replace(/\w/gi, '')
    .split('')
    .every((item, idx) => item !== input[input.length-1-idx])

console.log(countBrackets('((aa))')) // true
console.log(countBrackets('())')) // false