import React from 'react';
import {CodePane, Appear} from 'spectacle';
//import {darkComponents} from '../slides.js'

//onst Code = darkComponents.
const foods = [
  `text_to_sentiment("Let's go get Italian food")
  2.0429166109408983`,
  `text_to_sentiment("Let's go get Chinese food")
  1.4094033658140972`,
  `text_to_sentiment("Let's go get Mexican food")
  0.38801985560121732`,
]
export default () => (
  <div>
    {foods.map((f,i)=>(<Appear order={i}>
      <CodePane theme="external" lang="python" source={f}></CodePane>
    </Appear>))}
  </div>

)


/*```python
text_to_sentiment("Let's go get Italian food")
2.0429166109408983
text_to_sentiment("Let's go get Chinese food")
1.4094033658140972
text_to_sentiment("Let's go get Mexican food")
0.38801985560121732
```
*/
