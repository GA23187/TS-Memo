// 1字符串类型
let a:string = '123'
// 2数值类型
let b:number = 123
// 3布尔值类型
let c:boolean = true
c = false
// c = 1 // 0，1不能代替true与false
// 4,5 undefined与null
let d:undefined = undefined
let e:null = null
// 6数组类型
let arrJS = [1,'a',[],true]
let arrTs:string[] = ['打','它']
let arrNumTs:number[] = [1,2]

// 7泛型写法
let arrHero:Array<number> = [12,22]

// 8元组（tuple）
let tup:[string,boolean] = ['123',true]
tup = ['456',false]
// 访问元组
console.log(tup[0])
console.log(tup.length)

// 9 枚举(enum)
enum Gender {
	Boy =1,
	Girl= 2,
	Unknown = 3
}
console.log(Gender.Boy)
console.log(Gender.Girl)
// 创建
let userSex:Gender = Gender.Boy
// 判断变量中性别是否为Boy
if(userSex == Gender.Boy){
	console.log(userSex) // 1
}