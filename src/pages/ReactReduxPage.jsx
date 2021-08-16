import React, { Component } from 'react'
import { connect } from 'react-redux'
export default connect(
  // map state to props, 把state映射到props上， 把dispatch映射到props上 
  state => ({
    num: state
  }),
  {
    add: () => ({ type: 'ADD' })
  }
)(class ReactReduxPage extends Component {
  render() {
    const { num, add } = this.props;
    console.log('render', this.props);
    return (
      <div>
        <h3>
          ReactReduxPage
        </h3>
        <p>{num}</p>
        {/* <button onClick={() => { dispatch({ type: 'ADD' }) }}>ADD</button> */}
        <button onClick={ () => { add() }}>ADD</button>

      </div>
    )
  }
})
