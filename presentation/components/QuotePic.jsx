import React from 'react'
import {Appear, Text, Image} from 'spectacle'
import components from '../components.js'
import {darkComponents} from '../slides.js'
import './QuotePic.css'

const BlockQuoteX = darkComponents.blockquote;
const TextX = darkComponents.p;
const LinkX = darkComponents.a;

export default class QuotePic extends React.Component {
  render() {
    const {pic, quote, align,appear, quoter, source, ...rest} = this.props
    const qp = (<div className={"QuotePic " + align} style={{textAlign:align}}>
    <div className="QuotePic-pic">
      <Image src={pic} width={200} height={200}/>
    </div>
    <div className="QuotePic-quote">
      <BlockQuoteX textAlign={align} bold={false}>
      <TextX textSize='1.25rem' bold={false}>
        {quote}
      </TextX>
      </BlockQuoteX>
      <div className="QuotePic-sauce">
        <div className="QuotePic-quoter">
          {quoter}
        </div>
        <div className="QuotePic-source">
          source: <LinkX href={source.link}>{source.text}</LinkX>
        </div>
        </div>
    </div>
  </div>)
  if(appear)
    return (
      <Appear order={appear}>
      {qp}
  </Appear>)
  return qp
  }
}
