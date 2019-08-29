import * as types from "./types";
export default (state,{type,payload})=>{
    switch(type){
        case types.VIEW_NAV:
            return {...state,bNav:payload}
        case types.VIEW_FOOT:
            return {...state,bFoot:payload}
        case types.VIEW_LOADING:
            return {...state,bLoading:payload}
        case types.UPDATE_HOME:
            return {...state,home:payload.data}
        case types.UPDATE_LIST:
            return {...state,list:payload.data}
        case types.UPDATE_SHOP:
            return {...state,shop:payload.data}
        case types.UPDATE_DETAIL:
        // console.log("reducer",payload.data)
            return {...state,detail:payload.data}
        case types.UPDATE_USER:
            //同步localstorage
            window.localStorage.setItem('news_user',JSON.stringify(payload))
            return {...state, user:payload};
        default:
            return state;

    }
}