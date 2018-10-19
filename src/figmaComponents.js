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
<article className="CTile">
	<div className="class-57:1" style={{"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/2279/1083/fa0ba2465f67dddeac2e8135501835b0)","backgroundSize":"cover"}}>
	</div>
	<div className="class-57:2" style={{"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.699999988079071}}>
	</div>
	<div className="class-84:5" style={{}}>
	</div>
</article>
    );
  }
}

