import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  chanValue(v) {
    this.setState((state) => {
      return {
        counter:state.counter + v
      }
    })
  }
  setSounter() {
    // setState在合成事件和生命周期中是异步的
    // this.setState({
    //   counter: this.state.counter + 1
    //  }, () => {
    //   console.log('counter', this.state.counter);
    //  });

    // setState在setTimeout和原生事件中是同步的
    // setTimeout(() => {
    //   this.setState({
    //     counter: this.state.counter + 1
    //   });
    //   console.log('counter', this.state.counter);

    // }, 0);
    // console.log('counter', this.state.counter);

    // setState第一个参数为函数
    this.chanValue(1);
    this.chanValue(2);
  }
  render() {
    let { counter } = this.state;
    return (
      <div>
        <h3>SetStatePage</h3>
        <p>{counter}</p>
        <button onClick={() => { this.setSounter() }}>add</button>
      </div>
    )
  }
}
