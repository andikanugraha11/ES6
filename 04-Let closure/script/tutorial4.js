for (var i = 1; i <= 5; i++) {
    console.log(i);
}
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log(i_1);
}
var _loop_1 = function (i_2) {
    setTimeout(function () {
        console.log(i_2);
    }, 1000);
};
for (var i_2 = 1; i_2 <= 5; i_2++) {
    _loop_1(i_2);
}
//# sourceMappingURL=tutorial4.js.map