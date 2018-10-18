import React, { PureComponent } from 'react';
import { CColor } from './components/CColor';

export class MasterColor extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CColor {...this.props} nodeId="28:10" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "28:10") return CColor28D10;
  return null;
}

class CColor28D10 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="54:0"
            style={{"width":391,"marginLeft":-411,"height":385,"marginTop":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/2279/1083/fa0ba2465f67dddeac2e8135501835b0)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="38:0"
            style={{"width":391,"marginLeft":-411,"height":385,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.699999988079071}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="42:20"
            style={{"width":333,"marginLeft":-411,"height":85,"marginTop":-60,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Pellentesque Ultricies</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="42:21"
            style={{"width":333,"marginLeft":-411,"height":50,"marginTop":95,"color":"rgba(255, 255, 255, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Parturient Commodo Lorem sadask ndajksn djsankka</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="54:3"
            style={{"width":391,"marginLeft":411,"height":385,"marginTop":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9f8a/f602/ecfd602a48845dd567de2f9d5d187ea3)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="54:4"
            style={{"width":391,"marginLeft":411,"height":385,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.699999988079071}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="54:5"
            style={{"width":333,"marginLeft":411,"height":43,"marginTop":-60,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Nullam Porta</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="54:6"
            style={{"width":333,"marginLeft":411,"height":50,"marginTop":53,"color":"rgba(255, 255, 255, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

