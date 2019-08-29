import React from 'react';
import "./Shop.css"
export default class Shop extends React.Component{
  render(){
    return (
      <div className="Shop">
        <div className="car-head">
            <div className="edit">编辑全部</div>

            <div className="car-title">购物车</div>
       
        </div>
        <div className="car-list">
        <div className="car-list-tip">
            <input type="checkbox" className="car-check"/>
            <span >旗舰店</span>
            <span  className="right">领券</span>
            <div className="prompt">满减活动，满1000减100</div>
        </div>
        <div className="car-goods">
            <input type="checkbox" className="goods-check"/>
            <span className="goods-img"> <img src="./assets/img/detail1.jpg"/></span>
           
            <span className="goods-des">【明星同款】法国优雅时尚腕表品牌：Michel Herbelin赫柏林 Antarès恒星系列  吉普赛女郎  COF.17048/01L  女士石英表  </span>
            <span className="goods-price">￥11223</span>
        </div>
    </div>

    <div className="count">
        <input type="checkbox" className="goods-count"/>
        <span className="all-count">总计：</span><span></span>
        <span className="btn-count">结算</span>
    </div>
</div>
    )
  }
}