import React, { Component } from "react";
import config from "../../config";

export const MyContext = React.createContext({
  needs: [],
  inventories: [],
  need: {
    name: "",
    email: "",
    tampons: "",
    pads: "",
    zipcode: "",
  },
  inventory: {
    name: "",
    email: "",
    tampons: "",
    pads: "",
    zipcode: "",
  },
  handleAddNeed: () => {},
  handleDeleteNeed: () => {},
  handleAddInventory: () => {},
  handleDeleteInventory: () => {},
});

export class ContextsProvider extends Component {
  state = {
    needs: [],
    inventories: [],
    inventory: {
      name: "emma",
      email: "emma@gmail.com",
      tampons: "3",
      pads: "4",
      zipcode: "78758",
    },
    need: {
      name: "emma",
      email: "emma@gmail.com",
      tampons: "3",
      pads: "4",
      zipcode: "78758",
    },
    error: null,
  };

  componentDidMount() {
    let options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };

    //get inventories
    fetch(`${config.API_ENDPOINT}/inventories`, options)
      .then((res) => res.json())
      .then((inventories) => this.setState({ inventories }));
    //get needs
    fetch(`${config.API_ENDPOINT}/needs`, options)
      .then((res) => res.json())
      .then((needs) => this.setState({ needs }));
  }

  handleAddNeed = (need) => {
    console.log("add needs works!");
    this.setState({
      needs: [...this.state.needs, need],
    });
  };

  handleAddInventory = (inventory) => {
    console.log("add inventory works!");
    this.setState({
      inventories: [...this.state.inventories, inventory],
    });
  };

  handleDeleteNeed = (needId) => {
    console.log("delete");
    this.setState({
      needs: this.state.needs.filter((need) => need.id !== needId),
    });
    // console.log(`${needId}`);
    //delete api
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/needs/${needId}`, options).then((res) => {
      if (!res.ok) {
        throw new Error(res.error);
      }
    });
  };

  handleDeleteInventory = (inventoryId) => {
    console.log("delete");
    this.setState({
      inventories: this.state.inventories.filter(
        (inventory) => inventory.id !== inventoryId
      ),
    });
    // console.log(`${needId}`);
    //delete api
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/inventories/${inventoryId}`, options).then(
      (res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
      }
    );
  };

  render() {
    let value = {
      needs: this.state.needs,
      need: this.state.need,
      inventories: this.state.inventories,
      inventory: this.state.inventory,
      handleAddNeed: this.handleAddNeed,
      handleAddInventory: this.handleAddInventory,
      handleDeleteNeed: this.handleDeleteNeed,
      handleDeleteInventory: this.handleDeleteInventory,
    };
    return (
      <MyContext.Provider value={value}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
