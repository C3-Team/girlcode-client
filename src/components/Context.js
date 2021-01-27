import React, { Component } from "react";
import config from "../config";

export const NeedsContext = React.createContext({
  needs: [],
  need: {
    name: "",
    email: "",
    tampons: "",
    pads: "",
    zipcode: "",
  },
  handleAddNeed: () => {},
  handleDeleteNeed: () => {},
});

export class NeedsProvider extends Component {
  state = {
    needs: [],
    need: {
      name: "emma",
      email: "emma@gmail.com",
      tampons: "3",
      pads: "4",
      zipcode: "78758",
    },
  };

  componentDidMount() {
    let options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/needs`, options)
      .then((res) => res.json())
      .then((needs) => this.setState({ needs }));
  }

  handleAddNeed = (need) => {
    // console.log("here here here");
    this.setState({
      needs: [...this.state.needs, need],
    });
  };
  handleDeleteNeed = (needId) => {
    this.setState({
      needs: this.state.needs.filter((need) => need.id !== needId),
    });
  };

  render() {
    let value = {
      needs: this.state.needs,
      need: this.state.need,
    };
    return (
      <NeedsContext.Provider value={value}>
        {this.props.children}
      </NeedsContext.Provider>
    );
  }
}
