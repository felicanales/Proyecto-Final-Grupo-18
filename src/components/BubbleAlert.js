import React, { Component } from 'react'
import '../App.css'

export default class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) { return ' ' }
    return n > 9 ? '9+' : n
  }

  render() {
    const { value } = this.props
    return (
      <span>
        {this.getNumber(value)}
      </span>
    )
  }
}
