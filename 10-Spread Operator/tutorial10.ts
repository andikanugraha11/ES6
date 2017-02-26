let namaSiswa = (daftar, ...siswas)=>{
	console.log(daftar);
	for(let i in siswas){
		console.log(siswas[i]);
	}
}

let mahasiswa =['andika','dika','nugraha'];
let daftar = "List nama siswa :";
namaSiswa(daftar, ...mahasiswa);