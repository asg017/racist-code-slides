import React from 'react'
import './Name.css'
import {darkComponents} from '../slides.js'

const A = darkComponents.a;

export default ({children}) => (<div className="Name">
{children}
<br/>
<A href="https://twitter.com/agarcia_me" style={{fontSize:'2rem'}}>@agarcia_me</A>
  </div>)
