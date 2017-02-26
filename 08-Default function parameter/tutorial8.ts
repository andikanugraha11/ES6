let seratus = ()=>100;
let sepuluh = 10;
var penjumlahan = (a=sepuluh,b=a*seratus()) => {
	console.log(a+b)
}

penjumlahan();
penjumlahan(30);
penjumlahan(undefined,30);
penjumlahan(50,50);