function greetPerson(name) {
    if (name == "Dika") {
        var greet = "Hello Andika Nugraha";
    }
    else {
        var greet = "Hello pengunjung";
    }
    console.log(greet);
}
greetPerson("Dika");
var kurang = function (pertama, kedua) {
    console.log(pertama - kedua);
};
kurang(5, 10); // TypeError: kurang is not a function
//# sourceMappingURL=tutorial2.js.map