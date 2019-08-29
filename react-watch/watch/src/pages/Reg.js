import React from 'react';
import "./Reg.css";
import {Link} from "react-router-dom";
export default class Reg extends React.Component{
  render(){
    return (
      <div className="Reg">
          <div className="reg">
        <h3>注册</h3>
        <div className="reg-msg">
            <input type="text" className="reg-name" placeholder="用户名" />
            <input type="text" className="reg-pas" placeholder="密码" />
        </div>
        <Link to="/login">
        <span className="deng">用户登录</span>
        </Link>
        <Link to="/login">
        <input type="button" className="reg-btn" value="注册" />
        </Link>
    </div>
      </div>
    )
  }
}