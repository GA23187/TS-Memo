
// 1.函数返回值
function say():string{
    return '123'
}
let said:string = say()
console.log(said)

// 2.函数形参类型
function say2(cityName: string):void {
    console.log('去'+cityName)
}
say2('p城')

function test(name:string,test:string[]):void{
    console.log(name + 'zzz' + test)
}
test('tiger',['1','2'])

function add(x:number,y:number,...restNum:number[]):void{
    let res:number = x+y
    for(let ele of restNum){
        res += ele
    }
    console.log('求和',res)
}

add(1,2)
add(1,2,3,4,5)