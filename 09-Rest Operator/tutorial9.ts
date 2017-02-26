let namaBuah = () =>{
	for(let i in arguments){
		console.log(arguments[i]);
	}
}
namaBuah('Apel');
namaBuah('Apel','Anggur');
namaBuah('Apel','Anggur','Melon');

let namaSiswa = (daftar, ...siswas)=>{
	console.log(daftar);
	console.log(siswas);
	for(let i in siswas){
		console.log(siswas[i]);
	}
}

let daftar = "List nama siswa :";
namaSiswa(daftar,'dika');
namaSiswa(daftar,'Andika','Nugraha');