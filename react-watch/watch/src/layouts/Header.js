import React from 'react';
import "./Header.css"; 
import echarts from "echarts";
export default class Header extends React.Component{
  state={audioUrl:'/mp3/分组.mp3'};
  render(){
    return (
      <div className="Header">
            <div className="header">
              <span className="header-logo" onClick={this.show}><img src='/assets/img/head-logo.png'/></span>
              <input type="text" className="header-txt" placeholder="购表享12个月的分期" />
              <audio src={this.state.audioUrl} ref="audio"></audio>
            </div>
      </div>
    )  
  }
  show=()=>{
    this.refs.audio.play();
  }
  
}