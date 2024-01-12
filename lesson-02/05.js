let passport = {
    name: "Petr",
    surname: "Petrov",
};


let anotherObj = Object.assign({}, passport);
anotherObj.name = 'Ivan'


console.log(passport)
console.log(anotherObj)
