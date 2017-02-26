function greetPerson(name){
	if(name=="Dika"){
		var greet = "Hello Andika Nugraha";
	}else{
		var greet = "Hello pengunjung";
	}
	console.log(greet);
}

greetPerson("Dika");


// error, hoisting apabila berupa fungsi dalam variaberl maka pemanggilan harus setelah pendeklarasina variabel tersebut
kurang(5, 10); // TypeError: kurang is not a function

var kurang = function(pertama, kedua) {
  console.log(pertama - kedua);
}