let str = "zzzzyzz";

function findY(string) {
  return string.includes("y") ? "нашел" : "заблудился";
}

console.log(findY(str));
