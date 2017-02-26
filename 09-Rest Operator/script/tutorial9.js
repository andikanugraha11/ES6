var namaBuah = function () {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
namaBuah('Apel');
namaBuah('Apel', 'Anggur');
namaBuah('Apel', 'Anggur', 'Melon');
var namaSiswa = function (daftar) {
    var siswas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        siswas[_i - 1] = arguments[_i];
    }
    console.log(daftar);
    console.log(siswas);
    for (var i in siswas) {
        console.log(siswas[i]);
    }
};
var daftar = "List nama siswa :";
namaSiswa(daftar, 'dika');
namaSiswa(daftar, 'Andika', 'Nugraha');
//# sourceMappingURL=tutorial9.js.map