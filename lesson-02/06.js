let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let newPassport = JSON.parse(JSON.stringify(passportWithAddress));
newPassport.address.city = 'Bobryisk';

console.log(passportWithAddress)
console.log(newPassport)
