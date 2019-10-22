export default (number1, number2) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(number1 + number2), 1000);
    })
}
