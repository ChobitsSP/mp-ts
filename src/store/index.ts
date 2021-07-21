import { configure, observable, action } from 'mobx-miniprogram'
// import * as actions from './actions/index.js';

// 不允许在动作外部修改状态
configure({ enforceActions: 'observed' });

// const actDic = {};

// Object.keys(actions).forEach(key => {
//   actDic[key] = action(actions[key]);
// });

// https://developers.weixin.qq.com/miniprogram/dev/extended/utils/mobx.html

export default observable({
  // 数据字段
  numA: 1,
  numB: 2,

  // 计算属性
  get sum() {
    return this.numA + this.numB
  },

  // ...actDic,
});