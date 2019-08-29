import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';


import "./assets/css/public.css"
import "./assets/js/font"

import {BrowserRouter,Route} from "react-router-dom"
import "./plugins/axios"
// import * as  utils from "./utils"
// Object.keys(utils).forEach(key=>Reac.Component[key]=utils[key])

import store from "./store"
import {Provider} from "react-redux"
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
  ,
    document.getElementById('root')
);


