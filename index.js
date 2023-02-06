function recursive(num, degree) {
    if (degree) {
        return num * recursive(num, degree - 1)
    } else {
        return 1
    }
}
console.log(recursive(2, 3))