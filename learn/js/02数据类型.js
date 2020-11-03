"use strict";
// 1字符串类型
var a = '123';
// 2数值类型
var b = 123;
// 3布尔值类型
var c = true;
c = false;
// c = 1 // 0，1不能代替true与false
// 4,5 undefined与null
var d = undefined;
var e = null;
// 6数组类型
var arrJS = [1, 'a', [], true];
var arrTs = ['打', '它'];
var arrNumTs = [1, 2];
// 7泛型写法
var arrHero = [12, 22];
// 8元组（tuple）
var tup = ['123', true];
tup = ['456', false];
// 访问元组
console.log(tup[0]);
console.log(tup.length);
// 9 枚举(enum)
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
// 创建
var userSex = Gender.Boy;
// 判断变量中性别是否为Boy
if (userSex == Gender.Boy) {
    console.log(userSex); // 1
}
