import React from 'react';
import "./Detail.css";
import querystring from 'query-string';
import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom";
class Detail extends React.Component{
    componentDidMount(){
        let id = this.props.match.params.id-0;
        let dataName = querystring.parse(this.props.location.search).dataName;
        this.props.getDetail(dataName,id)
    }
  


   

    render(){
        let {title,detail}=this.props.data;
        let details; 
        if(detail) {
            details = detail
        }
        
        // console.log("title111",title);
        console.log("title123",detail);
        console.log("title11111111",details);
        console.log("detail2222222222",detail && details.auth);
      
       
        return (
            <div className="Detail">
         {
            <div>

            <div className="detail-top">
                 <span className="header-logo" onClick={()=>this.props.history.go(-1)}>←返回</span>
                 <span className="header-title"><i>商品</i><i>详情</i><i>评价</i><i>门店</i></span>
            </div>



            <div className="detail-img" >
                 <img src="/assets/img/detail1.jpg" />
            </div> 
            <div className="detail-title">
                     <div className="detail-price">${detail && details.price}</div>
                     <div className="detail-describe">{title}</div>
            </div>
       
            <div className="ad">
               <img src="/assets/img/detail2.jpg"/>
            </div>
            <div className="service">
               <div className="service-t"><img src="/assets/img/serve.png"/>延保服务</div>
               <div className="service-b"><img src="/assets/img/serve1.png"/>二手服务</div>
            </div>
   
            <div className="detail-foot">
               <div className="customer">客服</div>
               <div className="car">购物车</div>
               <div className="input-car" onClick={this.add()}>加入购物车</div>
               <div className="buy" ><NavLink to="/shop">立即购买</NavLink></div>
            </div>
          </div>
         }   
       
       </div>
        )
    }

        add=(ev)=>{
                this.goods=localStorage.getItem("goods");
                if(this.goods){
                    // 不是第一次
                    this.goods = JSON.parse(this.goods)
    
                    var onoff = true;
                    // 之后存
                    for(var i=0;i<this.goods.length;i++){
                        // 老的
                        if(this.goods[i].id == this.id){
                            this.goods[i].num++;
                            onoff = false;
                        }
                    }
                    // 新的
                    if(onoff){
                        this.goods.push({
                            id:this.id,
                            num:1
                        })
                    }
                }else{
                    // 第一次存
                    //     直接存
                    this.goods = [{
                        id:this.id,
                        num:1
                    }];
                }
                
                // 最后将数据设置回去
                localStorage.setItem("goods",JSON.stringify(this.goods))
        }
    }
  




const initMapStateToProps=state=>({
    data:state.detail,
});
  
const initMapDispatchToProps=dispatch=>({
    getDetail:(dataName,id)=>dispatch(asyncAction({
      apiname:`${dataName}/${id}`,
      typeName:types.UPDATE_DETAIL
    })) 
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)



