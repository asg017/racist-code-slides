import React from 'react';
import {Image, Appear} from 'spectacle';
//import {darkComponents} from '../slides.js'
import {sf1,sf2,sf3} from '../assets.js'

const foods = [sf1,sf2,sf3]
export default () => (
  <div>
    {foods.map((f,i)=>(
      <div key={i}>
      <Appear order={i} endValue={{zIndex:30+i*10}}>
        <div style={{position:'absolute',top:'1rem', left:'20%'}}>
          <Image src={f} width={800}/>
        </div>
    </Appear>
  </div>))}
  </div>)
