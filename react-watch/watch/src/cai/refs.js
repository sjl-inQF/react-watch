import React from 'react';
console.log(React)

export default class  ParentCom extends React.Component{

  state={
    msg1:'父数据',
  };

  constructor(){
    super();
    // this.t1 = React.createRef();//实例化一个ref

    // console.log('parent',this.t1)
  }

  render(){
    return (
      <div className="parent">
        <h3>父组件</h3>

        {/*<Child ref={this.t1}/>*/}
        <Child ref={el=>this.t1=el }/>

      </div>
    )
  }

  componentDidMount(){
    console.log(this.t1)

  }
}

const Child = React.forwardRef((props,ref) => (
  <div>
    <h3>子组件</h3>
    <input type="text" ref={ref} />
  </div>
));


