import Category from './CateEnum'

// 定义便签数据类
class ItemData {
  // !告诉编辑器可以为空
  id!: number; // 便签id
  categoryId!: Category; // 便签分类id
  title!: string;
  content!: string;
  createTime!: string;

  // 接收4个参数
  constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
    this.id = id;
    // 使用枚举类型 代表 笔记分类
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDateStr()
  }

  toSelfDateStr(): string {
    //1. 将 时间戳 转成 日期对象
    let date = new Date(Date.now());
    //2. 使用 日期对象 的 getXXX 方法 依次获取 年月日 时分秒，拼接成 想要的格式
    let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      + ' ' + date.getHours() + ':' + date.getMinutes();
    //3.最后 将 日期字符串 返回
    return str;
  }
}

export default ItemData;