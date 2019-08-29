import React from 'react';
import "./List.css";
import {Link,NavLink} from "react-router-dom";
import Lie from "../components/Lie/Lie";
import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";

class List extends React.Component{
    componentDidMount(){
        this.props.getList()
      }


  render(){
    let {list}=this.props;
    return (
      <div className="List">
          <div className="menus">
          <div className="menus-left">
            <ul >
                <li>推荐</li>
                <li>顶级品牌</li>
                <li>奢华品牌</li>
                <li>轻奢时尚</li>
                <li>年轻潮牌</li>
                <li>国产智能</li>
                <li>表带</li>
                <li>维修保养</li>
            </ul>

        </div>
        <div className="menus-right">
            <div className="menus-img"><img src="./assets/img/menus1.jpg" /></div>
            <div className="menus-like">--猜你喜欢--</div>
            <div className="menus-list">
              
                <ul>
                {
                    list.map(item=>(
                    <Lie key={item.id} linkApi item={item} history={this.props.history} dataName="list" />
                    ))
                }

                    {/* <li>
                        <div className="menus-list-img">
                            <img src="./assets/img/menus11.png"/>
                        </div>
                        <span>机械表</span>
                    </li>
                    <li>
                        <div className="menus-list-img">
                            <img src="./assets/img/menus22.png"/>
                        </div>
                        <span>石英表</span>
                    </li>
                    <li>
                        <div className="menus-list-img">
                            <img src="./assets/img/menus11.png"/>
                        </div>
                        <span>石英表</span>
                    </li> */}
                </ul>
        
            </div>
        </div>
    </div>  
      
  </div>
    )
  }
}


const initMapStateToProps=state=>({
    list:state.list,
  });
  
  const initMapDispatchToProps=dispatch=>({
    getList:()=>dispatch(asyncAction({
      apiname:'list',
      params:{_page:1,_limit:8},
      typeName:types.UPDATE_LIST
    }))
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(List)