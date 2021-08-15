import React, { Component } from 'react'
import store from '../store/index'
export default class ReduxDemo extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    console.log(store);
    return (
      <div>
        <h3>reduxdemo</h3>
        <p>{ store.getState() }</p>
        <button onClick={ () => store.dispatch({ type: "ADD" }) }>add</button>
      </div>
    )
  }
}
