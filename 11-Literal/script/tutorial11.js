var firstName = "Andika";
var lastName = "Nugraha";
var person = {
    firstName: firstName,
    lastName: lastName
};
//--------------------
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 30;
        }
    };
}
var dika = {
    "nama depan": "andika",
    "nama belakang": "Nugraha"
};
//-------------------------
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
var test = createPerson("Muhammad", "Andika", 31);
console.log(test);
console.log(test.firstName);
console.log(test.lastName);
console.log(test.fullName);
console.log(test.isSenior());
console.log(dika);
//# sourceMappingURL=tutorial11.js.map