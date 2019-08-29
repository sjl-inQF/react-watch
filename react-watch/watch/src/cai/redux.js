import React from 'react'

import {connect} from 'react-redux'

import asyncAction from "./store/asyncAction";

//UI组件 red
class App extends React.Component{
  render(){
    let {addItem,list,asyncAddItem,loading} = this.props;
    return (
      <div className="app">
        <h3>app</h3>

        <input type="text" ref="ipt" />

        <input type="button" value="提交" onClick={()=>addItem(this.refs.ipt.value)}/>
        <input type="button" value="异步提交" onClick={()=>asyncAddItem('home')}/>
        {loading && <div>loading</div>}
        <ul>
          {
            list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>

      </div>
    )
  }
}
