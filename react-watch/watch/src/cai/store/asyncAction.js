import axios from "axios";

/*
export default ({apiname,dispatch,params,typeName})=>{
  dispatch({type:'VIEW_LOADING',payload:true})
  axios({
    url:'/mock/'+apiname,
    params:params||null
  }).then(
    res=>{
      // console.log(res.data.data[0].des);
      dispatch({type:typeName,payload:res.data.data[0].des})
      dispatch({type:'VIEW_LOADING',payload:false})
    }
  );

  // return {type:'VIEW_LOADING',payload:true}
}*/


/*
export default ({apiname,params,typeName})=>{
  return (dispatch,getState)=>{
    //dispatch getState thunk中间件改装后，dispatch接收函数时，默认传递的参数
    console.log('asyncAction',getState());
    dispatch({type:'VIEW_LOADING',payload:true});
    axios({
      url:'/mock/'+apiname,
      params:params||null
    }).then(
      res=>{
        // console.log(res.data.data[0].des);
        dispatch({type:typeName,payload:res.data.data[0].des})
        dispatch({type:'VIEW_LOADING',payload:false})
      }
    );
  }
}*/

/*export default ({apiname,params,typeName})=>(dispatch,getState)=>{
  dispatch({type:'VIEW_LOADING',payload:true});
  axios({
    url:'/mock/'+apiname,
    params:params||null
  }).then(
    res=>{
      // console.log(res.data.data[0].des);
      dispatch({type:typeName,payload:res.data.data[0].des});
      dispatch({type:'VIEW_LOADING',payload:false})
    }
  );
}*/

export default ({apiname,params,typeName})=>(dispatch,getState)=>{
  dispatch({type:'VIEW_LOADING',payload:true});
  return axios({
    url:'/mock/'+apiname,
    params:params||null
  }).then(
    res=>{
      // console.log(res.data.data[0].des);
      dispatch({type:typeName,payload:res.data.data[0].des});
      dispatch({type:'VIEW_LOADING',payload:false})
      return res.data.err;
    }
  );
}
