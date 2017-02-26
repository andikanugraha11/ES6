var namaSiswa = function (daftar) {
    var siswas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        siswas[_i - 1] = arguments[_i];
    }
    console.log(daftar);
    for (var i in siswas) {
        console.log(siswas[i]);
    }
};
var mahasiswa = ['andika', 'dika', 'nugraha'];
var daftar = "List nama siswa :";
namaSiswa.apply(void 0, [daftar].concat(mahasiswa));
//# sourceMappingURL=tutorial10.js.map