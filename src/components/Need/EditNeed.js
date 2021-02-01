import React, { Component } from "react";
import { MyContext } from "../Context/Context";

class EditNeed extends Component {
  static contextType = MyContext;
  render() {
    return (
      <>
        <p>Name is {this.props.name}</p>
        {this.context.handleEditNeed(this.props.needId)}
      </>
    );
  }
}
export default EditNeed;
