import React from 'react';
import "./Cell.css"
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import querystring from 'query-string'


const Cell =({
  item,dataName,link,noindex,linkApi,history
})=>{
  console.log(item);
  console.log(dataName);
  const clickHandler = () => {
    if (linkApi){
      history.push({
        pathname:`/detail/${item.id}`,
        search:querystring.stringify({dataName})
      })
    }
  };


  return (
    <div className="Cell">
  
    {
      link?
      <Link to={{pathname:'/detail/'+item.id,search:querystring.stringify({dataName})}}>
        {
              noindex ?
                <li>
                  <div className="tab-img"><img src="./assets/img/detail1.jpg"/></div>
                  <div className="tab-title">
                    <p>{item.title}</p>
                    {/* <span>￥{item.price_mon}</span> */}
                    <span>￥{item.number}</span>
                  </div>
                </li>
                :
                <li>
                <div className="tab-img"><img src="./assets/img/detail1.jpg"/></div>
                <div className="tab-title">
                  <p>{item.title}</p>
                  {/* <span>￥{item.index}.{item.price_mon}</span> */}
                  <span>￥{item.number}</span>
                </div>
              </li>     
        }
      </Link>:
      <div onClick={clickHandler}>
        {
              noindex ?
                <li>
                  <div className="tab-img"><img src="./assets/img/detail1.jpg"/></div>
                  <div className="tab-title">
                    <p>{item.title}</p>
                    {/* <span>￥{item.price_mon}</span> */}
                    <span>￥{item.number}</span>
                  </div>
                </li>
                :
                <li>
                <div className="tab-img"><img src="./assets/img/detail1.jpg"/></div>
                <div className="tab-title">
                  <p>{item.title}</p>
                  {/* <span>￥{item.index}.{item.price_mon}</span> */}
                  <span>￥{item.number}</span>
                </div>
              </li>     
        }     
      </div>
    }
    </div>

  );
};

Cell.defaultProps = {
  noindex: false,
  linkApi:false,
  link:false,
};

Cell.propTypes={
  link: propTypes.bool,
  linkApi: propTypes.bool,
  noindex: propTypes.bool,
  item: propTypes.object.isRequired,
  dataName: propTypes.string
};

export default Cell;
