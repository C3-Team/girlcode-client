import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import EditNeed from "./EditNeed";
export default class NeedList extends Component {
  state = {
    expanded_item: null,
  };
  static contextType = MyContext;
  handleFilter = (e) => {
    let location = e.target.value;
    this.context.handleFilterNeed(location);
  };
  handleEdit = (needId) => {
    if (this.state.expanded_item === needId) {
      this.setState({
        expanded_item: null,
      });
    } else {
      this.setState({
        expanded_item: needId,
      });
    }
  };

  render() {
    let needs = this.context.needs;
    if (this.context.filterByState) {
      needs = this.context.needs.filter(
        (need) => need.need_location === this.context.filterByState
      );
    }
    return (
      <>
        <div>
          <label htmlFor="states">
            <div className="filter">
              Filter by states
              <select name="location" id="states" onChange={this.handleFilter}>
                <option value="">show all</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
          </label>
        </div>
        <div className="filter">
          <ul className="list">
            {needs.map((need) => (
              <li
                key={need.id}
                className="list-item animate__animated animate__backInLeft"
              >
                {need.user_name} needs {need.tampons} tampons and {need.pads}{" "}
                pads in {need.need_location}.
                <div>
                  <button
                    onClick={() => this.handleEdit(need.id)}
                    className="btn delete-edit edit "
                  >
                    Edit
                  </button>
                  {this.state.expanded_item === need.id && (
                    <EditNeed
                      key={need.id}
                      name={need.user_name}
                      needId={need.id}
                    />
                  )}
                  <a href={`mailto:${need.email}`}>
                    <button className="btn delete-edit contact">contact</button>
                  </a>
                  <button
                    className="btn delete-edit"
                    onClick={() => this.context.handleDeleteNeed(need.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
