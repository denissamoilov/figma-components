import React, { PureComponent } from 'react';
import { CTile } from './components/CTile';

export class MasterTile extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CTile {...this.props} nodeId="57:5" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "57:5") return CTile57D5;
  return null;
}

class CTile57D5 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="57:1"
            style={{"width":"100%","marginLeft":"-0.2564102564102564%","height":"100%","top":"0%","backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/2279/1083/fa0ba2465f67dddeac2e8135501835b0)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="57:2"
            style={{"width":"100%","marginLeft":"-0.2564102564102564%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.699999988079071}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="57:3"
            style={{"width":"85.1662347255609%","marginLeft":"7.160468468299279%","height":"12.987012987012987%","top":"50.38961038961039%","color":"rgba(255, 255, 255, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="57:4"
            style={{"width":"85.1662347255609%","marginLeft":"7.160468468299279%","height":"11.168831168831169%","top":"36.62337662337662%","color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Pharetra Adipiscing</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

