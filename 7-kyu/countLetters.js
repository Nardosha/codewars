// Solution 1
// const countLetters = (input) => {
//     let inputValue = input
//     let res = '';
//
//    for (let i = 0; i < inputValue.length; i++) {
//        let currentChar = inputValue[i];
//        let count = 0;
//
//        for (let k = 0; k < inputValue.length; k++) {
//            if (currentChar === inputValue[k]) {
//                ++count
//            }
//        }
//
//        inputValue = inputValue.replaceAll(currentChar, '')
//        res += `${count}${currentChar}`
//    }
//    return res
// }

// Solution 2
const countLetters = (input) => [...new Set(input)].map(item => `${[...input.matchAll(item)].length}${item}`).join('')

console.log(countLetters('aabbbcacccbab')) // '2a5b4c'
console.log(countLetters('aaaaaaa')) // '7a'
