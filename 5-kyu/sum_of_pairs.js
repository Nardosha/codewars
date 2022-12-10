// assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
// assert.deepEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
// assert.deepEqual(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
// assert.deepEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
// assert.deepEqual(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
// assert.deepEqual(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
// assert.deepEqual(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
// assert.deepEqual(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");

const reallyBig = Array(5000).fill(1, 0, )
reallyBig.push(0)
reallyBig.unshift(13)

const sum_of_pairs = (inputArray, inputSum) => {
    let resultArray = []
    let firstDistance
    let firstIndex

    for (let i = 0; i < inputArray.length; i++) {
        let firstDigit = inputArray[i]

        console.log(inputArray[i])
        for (let currentSecondIndex = i + 1; currentSecondIndex < inputArray.length; currentSecondIndex++) {

            let secondDigit = inputArray[currentSecondIndex]
            let sumResult = firstDigit + secondDigit


            if (sumResult === inputSum) {


                if (!firstDistance) {
                    firstIndex = currentSecondIndex
                    firstDistance = Math.abs(i - currentSecondIndex)
                    resultArray = [firstDigit, secondDigit]
                }

                let currentDistance = Math.abs(i - currentSecondIndex)
                if (currentDistance <= firstDistance && firstIndex > currentSecondIndex) {
                    firstDistance = currentDistance
                    resultArray = [firstDigit, secondDigit]
                }


            }
        }
    }
    return resultArray.length ? resultArray : undefined
}

// console.log(sum_of_pairs([1, 1, 8, 7, 3, 15], 8))
// console.log(sum_of_pairs([1, -2, 3, 0, -6, 1], -6))
// console.log(sum_of_pairs([20, -13, 40], -7)) //
// console.log(sum_of_pairs([1, 2, 3, 4, 1, 0], 2))
// console.log(sum_of_pairs([4, -2, 3, 3, 4], 8))
// console.log(sum_of_pairs([10, 5, 2, 3, 7, 5], 10)) // 3,7 - 3+4
console.log(sum_of_pairs(reallyBig, 13)) // 3,7 - 3+4
console.log('--------')