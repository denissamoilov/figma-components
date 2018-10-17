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
        <div style={{}} className="outerDiv centerer">
          <div
            id="38:0"
            style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.699999988079071}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="42:20"
            style={{"width":333,"marginLeft":0,"height":44,"marginTop":-35,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":500,"fontFamily":"Gotham","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Parturient Commodo Lorem sadask ndajksn djsankka</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="42:21"
            style={{"width":333,"marginLeft":0,"height":50,"marginTop":99,"color":"rgba(255, 255, 255, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Gotham","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Parturient Commodo Lorem sadask ndajksn djsankka</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

