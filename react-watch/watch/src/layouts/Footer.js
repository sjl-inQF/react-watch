import React from 'react';
import  './Footer.css'
import {NavLink} from "react-router-dom";
import echarts from "echarts";
export default class Footer extends React.Component{
state={audioUrl:'/mp3/在你心里排第七.mp3'};
  render(){
    return (
      <div className="Footer">
        <div className="footer" onClick={this.show}>
          <ul>
              <li className="active"><NavLink to="/home" activeClassName="active" >首页</NavLink></li>
              <li><NavLink to="/list" activeClassName="active">选表</NavLink></li>
              <li><NavLink to="/shop" activeClassName="active">购物车</NavLink></li>
              <li><NavLink to="/user" activeClassName="active">我的</NavLink></li>
          </ul>
          <audio src={this.state.audioUrl} ref="audio"></audio>
        </div>
      </div>
    )
  }
  show=()=>{
    this.refs.audio.play();
  }
  
}



// export default (props)=>(

      
//         <div className="Footer">
//           <div className="footer">
//               <ul>
//                   <li><NavLink to="/home" activeClassName='active' >首页</NavLink></li>
//                   <li><NavLink to="/list" activeClassName='active'>选表</NavLink></li>
//                   <li><NavLink to="/shop" activeClassName='active'>购物车</NavLink></li>
//                   <li><NavLink to="/user" activeClassName='active'>我的</NavLink></li>
//               </ul>
//           </div>
//         </div>

// )


  