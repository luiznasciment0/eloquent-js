for (let number = 1; number <= 100; number++) {
    const isNotZero = number !== 0

    const isDivisibleByThree = isNotZero && number % 3 === 0
    const isDivisibleByFive = isNotZero && number % 5 === 0

    const isDivisibleByThreeAndFive = isDivisibleByThree && isDivisibleByFive
    const isDivisibleOnlyByThree = isDivisibleByThree && !isDivisibleByFive
    const isDivisibleOnlyByFive = isDivisibleByFive && !isDivisibleByThree

    if (isDivisibleOnlyByThree) {
        console.log('Fizz')
    } else if (isDivisibleOnlyByFive) {
        console.log('Buzz')
    } else if (isDivisibleByThreeAndFive) {
        console.log('FizzBuzz')
    } 
    else {
        console.log(number)
    }
}