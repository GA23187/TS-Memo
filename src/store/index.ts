import Vuex from 'vuex'
import Vue from 'vue'
// 引入业务操作类
import ActionHelper from './ActionHelper';

Vue.use(Vuex)

// 数据共享
let store = new Vuex.Store({
  state: {
    isShow: false,// 控制编辑框的显示隐藏，操作它的地方有MemoItem组件和MemoEditor组件和MenuBar组件
    aHelper: new ActionHelper(),
    transMemo: null, // 便签数据的副本
    filterCateId: -1 // 筛选分类id
  },
  mutations: {
    // 修改副本变量与显示变量
    showEditMemo(state: any, editMemo: any) {
      state.transMemo = editMemo;
      state.isShow = true;
    }
  }
});

export default store;