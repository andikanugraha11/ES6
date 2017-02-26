function greetPerson(name){
	let greet;
	if(name=="Dika"){
		greet = "Hello Andika Nugraha";
	}else{
		greet = "Hello pengunjung";
	}
	console.log(greet);
}

greetPerson("Dika");

var a=1;
var b=2;

if(a==1){
	var a=10;
	let b=20;
	console.log(a);
	console.log(b);
}

console.log(a);
console.log(b);

let c=3;
if(true) {
	let c=10;
	console.log(c);
}
console.log(c);

var d=1;
if(true){
	var d =10;
	console.log(d);
}
console.log(d);