"use strict";
// DataHelper类 负责localStorage操作
var DataHelper = /** @class */ (function () {
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // 读取本地存储的数据
    DataHelper.prototype.readData = function () {
        var strData = localStorage.getItem(this.dataKey);
        var arrData = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    };
    // 保存数据到本地
    DataHelper.prototype.saveData = function (arrData) {
        var str = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    };
    // 新增数据,返回新增数据的id（存一个带primaryKey的对象到localStorage中）
    DataHelper.prototype.addData = function (conStr) {
        // 读取本地数据
        var arr = this.readData();
        // 创建评论对象
        var obj = {
            content: conStr
        };
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        // 评论对象设置primaryKey属性
        obj[this.primaryKey] = newId;
        // 将评论对象添加到数组中
        arr.push(obj);
        // 保存到localStorage
        this.saveData(arr);
        return newId;
    };
    // 删除数据,根据id
    DataHelper.prototype.removeDataById = function (id) {
        var _this = this;
        var arr = this.readData();
        var index = arr.findIndex(function (item) {
            return item[_this.primaryKey] == id;
        });
        if (index > -1) {
            arr.splice(index, -1);
            this.saveData(arr);
            return true;
        }
        return false;
    };
    return DataHelper;
}());
