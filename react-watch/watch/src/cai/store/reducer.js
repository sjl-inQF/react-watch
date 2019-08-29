let reducer = (state,action) => {

  let {type,payload} = action;

  switch (type) {
    case 'ADD_ITEM':
      //同步业务
      //return cpy+更新 的state

      /*let arr = [...state.list];
      arr.push(payload);
      return {list:arr};*/

      // Object.assign(合并后的对象,老对象,新对象)-->返回合并后的对象
      // return Object.assign({},state,{list:state.list.concat(payload)})
      return {list:[...state.list,payload]};

    case 'VIEW_LOADING':
      return {...state, loading:payload};
    case '3':
      //同步业务
      break;
    default:
      return state
  }
};

export default reducer;