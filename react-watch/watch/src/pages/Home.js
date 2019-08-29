import React from 'react';
import "./Home.css";
import Cell from "../components/Cell/Cell";
import { Link } from 'react-router-dom'
import Swiper from "../components/Banner/Swiper";
import {connect} from "react-redux";
import asyncAction from "../store/asyncAction";
import * as types from "../store/types"
class Home extends React.Component{
    state={
        imgHeight:200,
    };
    componentDidMount(){
        this.props.getHome();
      
    }
    clickHandler=(id,dataName,ev)=>{
        // console.log('clickHandler',id, dataName, ev)
        this.props.history.push({
          pathname:'/detail/'+id,
          search:'?dataName='+dataName
        })
    };
  render(){
    let {home}=this.props;
    return (
      <div className="Home">
        <Swiper />
      <Link to="/detail">
        <div className="assort">
          <ul>
              <li><img src="./assets/img/assort1.png"/></li>
              <li><img src="./assets/img/assort2.png"/></li>
              <li><img src="./assets/img/assort3.png"/></li>
              <li><img src="./assets/img/assort4.png"/></li>
          </ul>
        </div>
        <div className="assort-jpg">
            <img src="./assets/img/assort.jpg"/>
        </div>
        <div className="title">
            <h3>品牌</h3>
        </div>
        <div className="banner">
            <img src="./assets/img/banner4.jpg"/>
        </div>
       
        <div className="list">
        <ul>
            <li>浪琴</li>
            <li>欧米茄</li>
            <li>德国莫勒</li>
        </ul>
        <ul>
            <li>天梭</li>
            <li>劳力士</li>
            <li>东方星</li>
        </ul>
        <ul>
            <li>迪士尼</li>
            <li>赫柏林</li>
            <li>帝舵</li>
        </ul>
    </div>
    <div className="hot">
        <h3>爆款手表</h3>
        <ul>
            <li><img src="./assets/img/hot1.jpg"/></li>
            <li><img src="./assets/img/hot2.jpg"/></li>
            <li><img src="./assets/img/hot3.jpg"/></li>
        </ul>
    </div>  
    </Link>
    <div className="tab">
        <ul>
        {
          home.map(item=>(
            <Cell key={item.id} link item={item} dataName="home" />
          ))
        }
            {/* <li>
                <div className="tab-img"><img src="./assets/img/tab1.jpg"/></div>
                <div className="tab-title">
                    <p>万国 机械男表</p>
                    <span>￥1200</span>
                </div>
            </li>
            <li>
                <div className="tab-img"><img src="./assets/img/tab2.jpg"/></div>
                <div className="tab-title">
                    <p>万国 机械男表</p>
                    <span>￥1200</span>
                </div>
            </li> */}
        </ul>
    </div>    
    </div>
    )
  }
}

const initMapStateToProps=state=>({
        home:state.home
});

const initMapDispatchToProps=dispatch=>({
    getHome:()=>dispatch(asyncAction({
        apiname:'home',
        params:{_page:1,_limit:10},
        typeName:types.UPDATE_HOME
    }))
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home)