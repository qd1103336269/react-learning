import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../store';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  static defaultProps = {
    msg: 'omg'
  }
  static propTypes = {
    msg: PropTypes.string.isRequired
  }

  render() {
    console.log('render', this.props)
    return (
      <div>
        <h3>LifeCycle</h3>

      </div>
    )
  }
}
