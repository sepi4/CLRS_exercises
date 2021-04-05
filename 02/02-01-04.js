function add(A, B, n) {
    let C = new Array(n + 1).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        let x = A[i] + B[i] + C[i + 1]
        if (x === 2) {
            C[i] = 1
            C[i + 1] = 0
        } else if (x == 3) {
            C[i] = 1
            C[i + 1] = 1
        } else {
            C[i + 1] = x
        }
    }
    return C
}

console.log(
    add(
        [0, 1, 0],
        [0, 1, 1],
        3,
    )
)

