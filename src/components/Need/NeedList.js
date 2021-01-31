import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import config from "../../config";
export default class NeedList extends Component {
  static contextType = MyContext;
  handleFilter = (e) => {
    const state = e.target.value;
    console.log(state);
    this.context.handleFilterNeed(state);
  };
  handleShowEdit = (e) => {
    e.preventDefault(e);
    console.log("edit");
    document.getElementById("editForm").style.display = "block";
  };
  handleSubmitEdit = (e) => {
    e.preventDefault();
    const newNeed = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      need_location: e.target.location.value,
    };
    console.log(newNeed);
    //patch
    //patch
    const patchOptions = {
      method: "PATCH",
      body: JSON.stringify(newNeed),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    // fetch(`${config.API_ENDPOINT}/needs/${needId}`, patchOptions).then((res) =>
    //   res.json()
    // );
  };

  render() {
    return (
      <>
        <div className="list">
          {this.context.needs.map((need) => (
            <li key={need.id} className="list-item">
              {need.user_name} needs {need.tampons} tampons and {need.pads} pads
              in {need.need_location}.
              <div>
                <a href={`mailto:${need.email}`}>contact</a>
              </div>
              <div>
                <button onClick={() => this.context.handleDeleteNeed(need.id)}>
                  Delete
                </button>
                <button>Edit</button>
              </div>
            </li>
          ))}
        </div>
      </>
    );
  }
}
