// ref. https://www.digitalocean.com/community/tutorials/react-class-components
import React from "react";

class MyClassComponent extends React.Component {
  render() {
    const { compProp } = this.props;
    return <div className="myComp">{compProp}</div>;
  }
}

export default MyClassComponent;
