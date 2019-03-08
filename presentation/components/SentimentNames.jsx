import React from 'react';
import {CodePane, Appear} from 'spectacle';
//import {darkComponents} from '../slides.js'

//onst Code = darkComponents.
const names = [
  `text_to_sentiment("My name is Emily")
2.2286179364745311`,
`text_to_sentiment("My name is Heather")
1.3976291151079159`,
`text_to_sentiment("My name is Yvette")
0.98463802132985556`,
`text_to_sentiment("My name is Shaniqua")
-0.47048131775890656`,
]
export default () => (
  <div>
    {names.map((f,i)=>(<Appear order={i}>
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
