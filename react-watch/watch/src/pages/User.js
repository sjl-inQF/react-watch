import React from 'react';
import "./User.css"
export default class User extends React.Component{
  render(){
    //   let {data:{fans,follow}}=this.props;
    let {data:{fans,follow,icon,nikename}}=this.props;
    
    return (
      <div className="User">
          <div className="my-header">
        <div className="set"><span>设置</span></div>
        <div className="header-logo"><img src="./assets/img/assort1.png"/></div>
        <div className="state"><a href="">昵称</a><span>/</span><a>注销</a></div>
        <ul>
            <li>个人资料</li>
            <li>我的收藏</li>
            <li>收获地址</li>
        </ul>
    </div>
    <div className="my-order">
        <div className="my-title"><span>我的订单</span><span className="right">></span></div>
        <div className="my-order-state">
            <ul>
                <li>待付款</li>
                <li>待发货</li>
                <li>待收货</li>
                <li>待评价</li>
            </ul>
        </div>
    </div>
    <div className="my-order-botton">
        <div className="my-title"><span>我的服务</span><span className="right">></span></div>
        <div className="my-order-state">
            <ul>
                <li>优惠券</li>
                <li>余额</li>
                <li>足迹</li>
                <li>我的积分</li>
            </ul>
            <ul>
                <li>优惠券</li>
                <li>余额</li>
                <li>足迹</li>
                <li>我的积分</li>
            </ul>
            <ul>
                <li>优惠券</li>
                <li>余额</li>
                <li>足迹</li>
                <li>我的积分</li>
            </ul>
          
        </div>
    </div>
   
      </div>
    )
  }
}