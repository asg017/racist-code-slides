import React from 'react';
import {az1, az2, az3, az4} from '../assets.js'
import {Appear, Image} from 'spectacle'
import './AmazonFace.css'

export default class AmazonFace extends React.Component{
  render() {
    const azs = [az1,az2,az3,az4]
    return (
      <div>
      <div>
        {azs.map((az,i)=>(
          <Appear order={i} endValue={{zIndex:30+i*10}}>
            <div className="AmazonFace-imgcont">
              <Image src={az} width={800}/>
            </div>
        </Appear>))}
      </div>
      </div>

    );
  }
}
