// code
const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];


const sliceFruits = (arr) => {
    return arr.slice(1, arr.length-2)
}

console.log(sliceFruits(fruits));