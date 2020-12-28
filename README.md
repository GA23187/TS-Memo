# memo

# TS环境安装与运行

## 安装

- 安装NodeJS

- 通过npm 安装TypeScript

  ```
  //全局安装typescript
  npm install -g typescript
  // 校验
  tsc -V
  ```


## 运行

- 新建一个后缀为.ts的文件，在里面书写ts代码
- 使用tsc命令将ts代码编译成js代码
- 在浏览器或nodejs中执行代码



## 自动编译

设置VSCode自动编译

- 运行`tsc --init`，创建`tsconfig.json`为文件
- 修改`tsconfig.json`文件，设置生成js存放文件夹位置`"outDir":"./js/"`
- 设置vscode监视任务,在`tsconfig.json`文件下，终端>运行任务>ts>监视任务



## VS报错

- 在vscode控制台中运行命令时，出现下面错误

```
无法加载文件 D:\nodejs\node_global\tsc.ps1，因为在此系统上禁止运行脚本…

解决方法
1.以管理员身份运行vs code—>在vscode快捷方式,右击->属性,兼容性->勾选 ‘以管理员身份运行’->确定
2.在vs code 终端中运行下面命令:
执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
执行：set-ExecutionPolicy RemoteSigned
这时再执行get-ExecutionPolicy，就显示RemoteSigned
```



# TS变量与数据类型

## 变量

- 变量语法

  ```
  let 变量名: 变量类型 = 值
  let age: number = 18
  ```

  在TS中，为变量指定了类型，就只能给这个变量设置相同的类型。否则就会报错。

## 数据类型

- 原有类型

  `string` ` number` `boolean` `Array` `null` `undefined` `Symbol`  `Object`

- 新增类型

  `tuple元组` `enum枚举` `any任意类型` `never` `void`



### 数组

- 语法

  限制类型，不限制数量

  里面的值，只有一种类型

  方式一: `let 数组名:类型[] = [值1，值2]`

  `let arr:string[] = ['zz','ccc']`

  方式二: `let 数组名:Array<类型> = [值1，值2]`

  `泛型写法`

  `let arr:Array<number> = [1,123]`



### 元组

- 概念

  一个规定了元素数量和每个元素类型的数组，每个元素的类型可以不同。

- 语法

  `let 元组名:[类型1，类型2]=[值1，值2]`

  类型，数量，顺序都不能变动

  `let tup1:[string,number,boolean] = ['12',1,true]`

- 访问元组与长度

  `console.log(tup[0])`

  `console.log(tup.length)`

- 特点

  声明时，要指定元素个数与类型



### 枚举

- 语法

  ```
  enum 枚举名 {
  	枚举项1 = 枚举值1,
  	枚举项2 = 枚举值2
  }
  枚举项一般是英文和数字，而枚举值用整数
  
  将一些数值给语义化
  ```

  ```
  枚举的默认值，自动从0开始的数值
  enum 枚举名{
  	枚举项1,   // 0
  	枚举项2    // 1
  }
  ```

- 实践

  ```
  enum Gender {
  	Boy =1,
  	Girl= 2,
  	Unknown = 3
  }
  
  // 创建
  let userSex:Gender = Gender.Boy
  
  let userSex:Gender = 1也是可以的
  
  // 判断变量中性别是否为Boy
  if(userSex == Gender.Boy){
  	console.log(userSex) // 1
  }
  ```

### any

- 概念

  any代表任意类型，一般在我们接收用户输入或第三方代码库时，不能确认会返回什么类型的值时使用

- 示例

  `let txtName:any = document.getElementByID('tt')`

### void

- 概念

  void代表没有类型，一般用于无返回值的函数上

  ```
  在TS中要求函数必须有返回值,也就是必须return 
  function say():string {
  	return '123'
  }
  但是有些是不需要返回值的，所以可以在声明函数时，使用void就可以不用return了
  function say():void{
  	console.log('无返回值')
  }
  ```



### never

- 概念

  不存在的值的类型，常用于作为抛出异常或无限循环的函数返回类型

  ```
  function test():never {
  	while(true){
  
  	}
  }
  function t():never {
  	throw new Error('xx')
  }
  
  
  ```

- never类型是ts中的底部类型，所以类型都是never的父类
  所以never类型的值可以赋予任意类型的变量。

  

  

## 类型推断

- 概念

  如果变量的声明和初始化是在同一行，那么可以省略变量类型的声明

  ```
  let 变量名 = 值
   ===
  let 变量名: 变量类型 = 值
  ```

## 联合类型

- 概念

  表示取值类型可以是多种类型中的一种

  `let 变量名: 变量类型1|变量类型2 = 值`

- eg

  ```typescript
  let dName:string|null = prompt('输入name')
  ```

# TS函数

### 函数的返回值和参数

- 函数 返回值

  ```
  function 函数名():返回值类型 {
  
  }
  let 变量名:变量类型 = 函数名()
  ```

- 函数 形参

  ```
  function 函数名(形参1：类型,形参2:类型):返回值类型 {
  
  }
  let 变量名:变量类型 = 函数名(实参1，实参2)
  ```

- 特点：

  实参和形参的类型和数量要一致。

  函数必须定义返回值的类型，如果没有返回值，则定义返回值类型为void。

### 可选参数

- 语法

  ```
  function 函数名(形参?:类型):返回值类型 {
  
  }
  ```

- 调用

  ```
  不传实参 函数名()
  传实参 函数名(实参值)
  ```

### 默认值

- 语法

  ```
  function 函数名(形参1:类型=默认值1,形参2:类型=默认值2):返回值类型 {
  
  }
  带默认值的参数，本身也是可选参数。
  
  ```

- 调用

  ```
  不传 函数()			---		函数(默认值1，默认值2)
  传一个 函数(实参1)			---		函数(实参1，默认值2)
  传二个 函数(实参1,实参2)			---		函数(实参1，实参2)
  只传第二个实参 函数(undefined,实参2)			---		函数(默认值1，实参2)
  ```



### 剩余参数

- 形参数量不确定,

- 语法

  ```
  // 最后是个数组类型,三个点
  function 函数名(形参1:类型,形参2:类型,...形参3:类型[]):void {
  
  }
  ```

- 特点

  剩余参数 只能 定义一个

  剩余参数 只能 定义为数组（那岂不是类型相同，any[]）

  剩余参数 只能 定义在形参列表的最后

- eg

  ```
  function add(x:number,y:number,...restNum:number[]):void{
      let res:number = x+y
      for(let ele of restNum){
          res += ele
      }
      console.log('求和',res)
  }
  
  add(1,2)
  add(1,2,3,4,5)
  ```



## 类

### JS构造函数

- 创建对象

  ```javascript
  function City(name,level){
  	this.name = name;
  	this.level = level;
  	//this.about = function(){}
  }
  City.prototype.about = function(){
  	console.log(`你好，【${this.name}】,危险等级【${this.level}】`)
  }
  
  在原型中声明方法与在构造函数中声明方法的区别：
  在原型中声明，可以共享一个内存空间，每次new出来的对象，都可以通过__proto_找到。
  ```

### TS

- 创建对象

```
class City {
	// 成员变量(要么这里初始化赋值，要么构造函数中赋值)
	name:string;
	level:number;
    // 构造函数，初始化
	constructor(name:string,level:number){
		this.name = name
		this.level = level
	}
	// 成员方法
	about(){
		console.log(`你好，【${this.name}】,危险等级【${this.level}】`)
	}
}
```

- 调用

  ```
  let c = new('p城',2)
  ```

  



# VUE+TS实践

## 搭建vue+ts脚手架

- 安装vue/cli  `npm i -g @vue/cli`

- 创建vue项目  `vue create xxx`

- 安装vue/typescript，进入创建的xxx项目文件夹里面。 `vue add @vue/typescript `  

  中间过程yes就可以了。

- 安装vuex `npm i vuex`

- 关闭eslint的变量声明未使用检查。

  ```
  package.json文件中
  "eslintConfig":{
  	"rules":{
  		"no-unused-vars": 0
  	}
  }
  ```

## 一些

- 项目UI采用Bootstrap，里面的那种下拉框出现，是通过

  `data-toggle="dropdown"`来触发的。如点击新建出现文本便签。

- 区别编辑与新增的变量---传入弹窗的itemData的id值。

  新增的id都为-1

- 分类功能的实现

  通过全局的分类id，控制itemList中渲染不同的标签数组









## VS问题

- 在我们编写ts代码的时候会出现波浪线警告，鼠标移上去出现以下情况：

  ```
   (property) DateHelper.prmimaryKey: string
   元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{}"。
   在类型 "{}" 上找不到具有类型为 "string" 的参数的索引签名。ts(7053)
   速览问题 (Alt+F8)       没有可用的快速修复
  ```

  我们在项目中的tsconfig.json文件中添加：

  ```
   "suppressImplicitAnyIndexErrors":true,
  ```

  则不报警告了。

- VS中源代码管理初始化提示`spawn Program Files\Git\cmd\git.exe ENOENT`

  原因：我的git安装在D盘下面，vscode是从`C:\Program Files\Git\cmd\git.exe`下面找的。