<template>
  <!-- 页面主体，多个便签的展示 -->
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem,
  },
})
// 便签List组件类
export default class ItemList extends Vue {
  // 声明 笔记数组 并初始化 （main.js中注册了store，store中有实例化了ActionHelper,ActionHelper的构造函数读取了本地数据）
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;

  // 根据filterCateId来得到要渲染的列表数据
  filterMemo() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.categoryId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>