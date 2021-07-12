function isEven(x) {
    if (x == 0) return true
    if (x == 1) return false
    if (x < 0) return isEven(-x)

    return isEven(x - 2)
}

console.log(isEven(-2))