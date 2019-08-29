import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";


class Login extends React.Component{
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      mess:''
    }
  }
  changeMess=(ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }


  // send=()=>{
  //   Login.axios({
  //     url:"/mock/login",
  //     params:{username:this.state.username,password:this.state.password}
  //   }).then(
  //     res=>{
  //       if(res.data.err===0){
  //         this.props.history.push("/user")
  //       }else{
  //         this.setState({mess:res.data.msg})
  //       }
  //     }
  //   )
  // }

  render(){
    let {username,password}=this.state;
    return (
      <div className="Login">
        <div className="login">
          <h3>登录</h3>
          <div className="login-msg">
              <input type="text" className="login-name" placeholder="用户名" value={username} onChange={this.changeMess} name="username"/>
              <input type="text" className="login-pas" placeholder="密码" vaule={password} onChange={this.changeMess} name="password"/>
          </div>
      
          <Link to="/reg">
            <span className="zhu">用户注册</span>
          </Link>
          <div className="mess"></div>
       
              <input type="button" className="login-btn" value="登录" onClick={
                ()=>this.props.login({
                  username:this.state.username,
                  password:this.state.password,
                  history:this.props.history,
                  _this:this
                })
              }/>
       
     
        </div>
      </div>
    )
  }
}



const initMapDispatchToProps=(dispatch,ownProps)=>({
  login:({username,password,history,_this})=>dispatch(asyncAction({
    apiname:'login',
    params:{username,password},
    typeName:types.UPDATE_USER
  })).then(
    res=>{
      if (res.err===0){
        // alert(0);
        // console.log(ownProps)
        // history.push('/user');
        ownProps.history.push('/user')
      } else {
        // console.log(this)
        _this.setState({mess:res.msg})
      }

      //同步localstorage
    }
  )
});

export default connect(
  null,
  initMapDispatchToProps
)(Login)