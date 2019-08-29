import React from 'react';

import axios from 'axios';

// import PubSub from 'pubsub-js'
import store from "../store"
import * as types from "../store/types" 
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //通知app 修改bLoading数据
  // PubSub.publish('VIEW_LOADING',true);
  store.dispatch({type:types.VIEW_LOADING,payload:true});
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.request.use(function (config) {
  //通知app 修改bLoading数据
  // PubSub.publish('VIEW_LOADING',false);
  store.dispatch({type:types.VIEW_LOADING,payload:true});
  return config;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  //通知app 修改bLoading数据
  store.dispatch({type:types.VIEW_LOADING,payload:false});
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

React.Component.axios=axios;
window.axios = axios;

export default axios;