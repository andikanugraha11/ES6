let firstName	= "Andika";
let lastName	= "Nugraha";

let person = {
	firstName 	,
	lastName	: lastName
}

//--------------------

function createPerson(firstName,lastName,age){
	let fullName = firstName + " " + lastName;
	return {
				firstName,
				lastName,
				fullName,
				isSenior(){
					return age>30;
				}
			}
}

let dika {
	"nama depan"	: "andika",
	"nama belakang"	: "Nugraha"
}

//-------------------------
console.log(person);
console.log(person.firstName);
console.log(person.lastName);

let test = createPerson("Muhammad","Andika",31);
console.log(test);
console.log(test.firstName);
console.log(test.lastName);
console.log(test.fullName);
console.log(test.isSenior());

console.log(dika);