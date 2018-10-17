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
        <div style={{}} className="outerDiv">
          <div
            id="38:0"
            style={{"marginLeft":0,"width":200,"minWidth":200,"height":null,"marginTop":0,"marginBottom":313,"minHeight":100,"backgroundColor":"rgba(80, 102, 218, 1)","borderRadius":"20px 20px 20px 20px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"justifyContent":"center"}} className="outerDiv maxer">
          <div
            id="28:10"
            style={{"backgroundColor":null,"overflow":"hidden","width":"100%","pointerEvents":"none"}}
            className="innerDiv"
          >
            <div style={{"zIndex":1,"justifyContent":"flex-end"}} className="outerDiv">
              <div
                id="38:1"
                style={{"marginRight":0,"width":100,"minWidth":100,"height":null,"marginTop":313,"marginBottom":0,"minHeight":100,"backgroundColor":"rgba(83, 218, 80, 1)","borderRadius":"20px 20px 20px 20px"}}
                className="innerDiv"
              >
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

