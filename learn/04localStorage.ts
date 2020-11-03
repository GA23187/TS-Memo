// DataHelper类 负责localStorage操作
class DataHelper {
    dataKey: string; // localStorage里的key
    primaryKey: string; // localStorage里的value的key名称

    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // 读取本地存储的数据
    readData(): any {
        let strData: string | null = localStorage.getItem(this.dataKey)
        let arrData: any = []
        if (strData != null) {
            arrData = JSON.parse(strData)
        }
        return arrData
    }

    // 保存数据到本地
    saveData(arrData: Array<Object>): void {
        let str: string = JSON.stringify(arrData)
        localStorage.setItem(this.dataKey, str)
    }

    // 新增数据,返回新增数据的id（存一个带primaryKey的对象到localStorage中）
    addData(conStr: string): number {
        // 读取本地数据
        let arr: any = this.readData()
        // 创建评论对象
        let obj: Object = {
            content: conStr
        }
        let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1
        // 评论对象设置primaryKey属性
        obj[this.primaryKey] = newId
        // 将评论对象添加到数组中
        arr.push(obj)
        // 保存到localStorage
        this.saveData(arr)
        return newId
    }

    // 删除数据,根据id
    removeDataById(id: string | number): boolean {
        let arr = this.readData()
        let index = arr.findIndex((item: { [x: string]: string | number; }) => {
            return item[this.primaryKey] == id
        })
        if (index > -1) {
            arr.splice(index, -1)
            this.saveData(arr)
            return true
        }
        return false
    }
}