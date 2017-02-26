var seratus = function () { return 100; };
var sepuluh = 10;
var penjumlahan = function (a, b) {
    if (a === void 0) { a = sepuluh; }
    if (b === void 0) { b = a * seratus(); }
    console.log(a + b);
};
penjumlahan(); //10+20
penjumlahan(30); //30+20
penjumlahan(undefined, 30); //10+30
penjumlahan(50, 50); //50+50
//# sourceMappingURL=tutorial8.js.map