import React from 'react'
import './Name.css'
import {darkComponents} from '../slides.js'

const A = darkComponents.a;

export default ({children}) => (<div className="Name">
{children}
<br/>
<A href="https://twitter.com/asg_027" style={{fontSize:'2rem'}}>@asg_027</A>
  </div>)
