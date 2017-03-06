let mahasiswa = ["andika", "nugraha", 21];
//let [firstName, lastName, age] = mahasiswa;
let [firsName, ...elements] = mahasiswa;
console.log(mahasiswa);
console.log(firsName);
console.log(elements);