import React from 'react';
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import {Route,Switch,Redirect} from "react-router-dom"

import Loading from "../components/loading/Loading";
import Home from "../pages/Home"
import List from "../pages/List"
import Detail from "../pages/Detail"
import User from "../pages/User"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import Shop from "../pages/Shop"
import Error from "../pages/Error"
import Auth from "../guard/Auth";

import {connect} from "react-redux";
import {VIEW_NAV,VIEW_FOOT,VIEW_LOADING} from "../store/types"
 class App extends React.Component{
   
  componentWillReceiveProps(nextProps){
 
    let path=nextProps.location.pathname;
    this.checkPath(path)
  }
  componentDidMount(){
    let path=this.props.location.pathname;
    this.checkPath(path)
  }
  checkPath=(path)=>{

    let {viewNav,viewFoot}=this.props;
    // console.log(this.props)
    if(/home/.test(path)){
        viewNav(true);
        viewFoot(true);
    }
    if(/detail|reg|login/.test(path)){
      viewNav(false);
      viewFoot(false);
    }
    if(/shop|user|list/.test(path)){
      viewNav(false);
      viewFoot(true);
    }
  }

  render(){
    // console.log(this.props)
    let {bNav,bFoot,bLoading}=this.props
    return (
      <div className="App">
          {bLoading&&<Loading />}
          {bNav&& <Header />}
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/list" component={List}/>
                <Route path="/shop" component={Shop}/>
                <Auth path="/user" component={User}/>
                <Redirect exact from="/" to="/home"/>
                <Route component={Error}/>
                
              </Switch>
          {bFoot?<Footer />:null}
         
      </div>
    )
  }
}
const initMapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
})

const initMapDispatchToProps=dispatch=>({
  viewNav:(bl)=>dispatch({type:VIEW_NAV,payload:bl}),
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl}),
  // VIEW_LOADING:(bl)=>dispatch({type:VIEW_LOADING,payload:bl})

})
export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)
