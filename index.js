const fibonacci = (n, iter = 0, value = 1, prev = 0) => {
    // 0, 1, 1, 2, 3, 5 ... handle base cases
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 2;
    }

    if (iter < n - 1) {
        const newValue = value + prev;
        return fibonacci(n, iter + 1, newValue, value);
    }

    return value;
};

module.exports = {
    fibonacci
}