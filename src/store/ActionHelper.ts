import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum';

// 业务操作类
class ActionHelper {
  // 成员变量：数据处理（localStorage的key，localStorage的value的key）
  dataHelper: DataHelper = new DataHelper('memoData', 'id');
  // 成员变量：笔记数组
  memoList!: Array<ItemData>;

  // 构造函数
  constructor() {
    //读取本地数据，将 笔记数组 保存 到 this.memoList 变量中，但是注意需要转下类型
    this.memoList = this.readData();
  }

  // 读取本地数据，并返回 ItemData类型数组
  readData(): Array<ItemData> {
    //1.读取 本地 的 Object数组 - dataHelper
    let arrObj = this.dataHelper.readData();
    //2.将 Object数组 转成 ItemData数组
    let arrItem = arrObj.map((ele: any) => {
      //--- 实例化一个ItemData类型的变量 ---
      // Todo 优化，当ItemData的成员发生变动，这里的赋值也会变动,存在啥方法优化下？
      let item: ItemData = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;

      return item;
    });

    //3.返回itemData数组
    return arrItem;
  }

  // 根据枚举值得到具体的分类名称
  getCategoryName(cateId: Category): string {
    const arrName = ['工作', '生活', '学习']
    return arrName[cateId]
  }


  // 新增笔记
  /**
   * 
   * @param itemData 便签类型
   */
  add(item: ItemData): number {
    item.id = this.dataHelper.addData(item);
    this.memoList.push(item);
    this.dataHelper.saveData(this.memoList);
    return item.id;

  }

  // 编辑笔记
  /**
   * 
   * @param itemData 便签类型
   */
  edit(item: ItemData): void {
    // 根据id找到要编辑的item
    let editItem: ItemData | undefined = this.memoList.find(ele => {
      return ele.id == item.id
    });
    // 将 传入的对象各个属性 覆盖到 找到的item
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;

      // 将更新后的 数组 重新保存到 本地localstorage
      this.dataHelper.saveData(this.memoList);
    }
  }

  // 删除
  /**
   * 
   * @param id 笔记id
   */
  remove(id: number): void {
    // 从笔记数组中找到要删除项的索引
    let index: number = this.memoList.findIndex(ele => {
      return ele.id === id;
    })
    if (index > -1) {
      // 从笔记数组中移除
      this.memoList.splice(index, 1);
      // 将更新后的 数组 重新保存到 本地localstorage
      this.dataHelper.saveData(this.memoList);
    }
  }
}

export default ActionHelper