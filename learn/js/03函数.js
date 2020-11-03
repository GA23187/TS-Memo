"use strict";
// 1.函数返回值
function say() {
    return '123';
}
var said = say();
console.log(said);
// 2.函数形参类型
function say2(cityName) {
    console.log('去' + cityName);
}
say2('p城');
function test(name, test) {
    console.log(name + 'zzz' + test);
}
test('tiger', ['1', '2']);
function add(x, y) {
    var restNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restNum[_i - 2] = arguments[_i];
    }
    var res = x + y;
    for (var _a = 0, restNum_1 = restNum; _a < restNum_1.length; _a++) {
        var ele = restNum_1[_a];
        res += ele;
    }
    console.log('求和', res);
}
add(1, 2);
add(1, 2, 3, 4, 5);
