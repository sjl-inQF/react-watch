import React from 'react';
import "./Lie.css"
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import querystring from 'query-string'


const Lie =({
  item,dataName,link,noindex,linkApi,history
})=>{
  const clickHandler = () => {
    if (linkApi){
      history.push({
        pathname:`/detail/${item.id}`,
        search:querystring.stringify({dataName})
      })
    }
  };


  return (
    <div className="Lie">
    {
      link?
      <Link to={{pathname:'/detail/'+item.id,search:querystring.stringify({dataName})}}>
        {
              noindex ?
                <li>
                    <div className="menus-list-img">
                        <img src="./assets/img/menus22.png"/>
                    </div>
                    <span>{item.word}</span>
                </li>
                :
                <li>
                    <div className="menus-list-img">
                        <img src="./assets/img/menus22.png"/>
                    </div>
                    <span>{item.word}</span>
                </li>   
        }
      </Link>:
      <div onClick={clickHandler}>
        {
              noindex ?
                <li>
                    <div className="menus-list-img">
                        <img src="./assets/img/menus22.png"/>
                    </div>
                    <span>{item.word}</span>
                </li>
                :
                <li>
                    <div className="menus-list-img">
                        <img src="./assets/img/menus22.png"/>
                    </div>
                    <span>{item.word}</span>
                </li>   
        }     
      </div>
    }
    </div>

  );
};

Lie.defaultProps = {
  noindex: false,
  linkApi:false,
  link:false,
};

Lie.propTypes={
  link: propTypes.bool,
  linkApi: propTypes.bool,
  noindex: propTypes.bool,
  item: propTypes.object.isRequired,
  dataName: propTypes.string
};

export default Lie;
