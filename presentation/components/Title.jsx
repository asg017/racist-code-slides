import React from 'react'
import Number from './Number.jsx'
import './Title.css'

const Title = ({number, children}) => (<div className="Title">
  <Number number={number}/>
  <span className="Title-text">{children}</span>
  </div>)
export default Title
