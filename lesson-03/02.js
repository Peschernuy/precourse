const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange(arr) {
  if (arr.indexOf("апельсин")) {
    return "Ура! нашел";
  } else {
    return "Придется поискать в другом магазине…";
  }
}

console.log(findOrange(words));
