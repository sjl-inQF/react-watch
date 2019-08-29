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


const mapStateToProps = (state,ownProps) => ({
  list:state.list,
  loading:state.loading
});

//blue
const mapDispatchToProps = (dispatch,ownProps) => ({
  addItem:(val)=>dispatch({type:'ADD_ITEM',payload:val}),
  // asyncAddItem:(apiname)=>asyncAction({apiname,dispatch,typeName:'ADD_ITEM'})
  // asyncAddItem:(apiname)=>dispatch(asyncAction({apiname,dispatch,typeName:'ADD_ITEM'}))
  // asyncAddItem:(apiname)=>dispatch(asyncAction({apiname,typeName:'ADD_ITEM'}))
  asyncAddItem:(apiname)=>dispatch(asyncAction({apiname,typeName:'ADD_ITEM'})).then(
    err => console.log(err)
  )
});


//容器组件 orange
export default connect(mapStateToProps,mapDispatchToProps)(App)