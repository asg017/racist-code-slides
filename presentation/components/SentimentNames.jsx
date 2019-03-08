import React from 'react';
import {Image, Appear} from 'spectacle';
//import {darkComponents} from '../slides.js'
import {sn1,sn2,sn3,sn4} from '../assets.js'

const names = [sn1,sn2,sn3,sn4]
export default () => (
  <div>
    {names.map((n,i)=>(
      <div key={i}>
      <Appear order={i} endValue={{zIndex:30+i*10}}>
        <div style={{position:'absolute',top:'1rem', left:'20%'}}>
          <Image src={n} width={800}/>
        </div>
    </Appear>
  </div>))}
  </div>)


/*```python
text_to_sentiment("Let's go get Italian food")
2.0429166109408983
text_to_sentiment("Let's go get Chinese food")
1.4094033658140972
text_to_sentiment("Let's go get Mexican food")
0.38801985560121732
```
*/
