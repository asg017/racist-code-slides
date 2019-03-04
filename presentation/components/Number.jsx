import React from 'react'
import './Number.css'

export default class Number extends React.Component {
  render() {
    const {number } = this.props;
    return (<span className="Number">#{number}</span>)
  }
}
