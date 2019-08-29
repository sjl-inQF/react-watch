import {VIEW_LOADING} from "./types"
import axios from "axios"
export default ({apiname,params,typeName})=>(dispatch,getState)=>{
  // dispatch({type:VIEW_LOADING,payload:true});
  console.log("async",'/mock/'+apiname)
  return axios({
    url:'/mock/'+apiname,
    params:params||null
  }).then(
    res=>{
      // console.log(res.data.data[0].des);
      dispatch({type:typeName,payload:res.data});
      // dispatch({type:VIEW_LOADING,payload:false})
      return {err:res.data.err,msg:res.data.msg};
    }
  );
}
