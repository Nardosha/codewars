const count = (input) => {
    let currentLetter = input[0]
    let count = 1
    let result = ''
    for (let i = 1; i < input.length; i++) {
        if (input[i] === currentLetter) {
            count++
            continue
        }
        result += count + currentLetter
        count = 1
        currentLetter = input[i]
    }
    result += count + currentLetter
    return result
}


console.log(count('aabbbcabaa')) // '2a3b2a'
console.log(count('aaaaaaa')) // '7a'