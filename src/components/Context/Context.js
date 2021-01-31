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
    location: "",
  },
  inventory: {
    name: "",
    email: "",
    tampons: "",
    pads: "",
    location: "",
  },
  handleAddNeed: () => {},
  handleDeleteNeed: () => {},
  handleAddInventory: () => {},
  handleDeleteInventory: () => {},
  handleUpdateNeed: () => {},
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
      location: "WA",
    },
    need: {
      name: "emma",
      email: "emma@gmail.com",
      tampons: "3",
      pads: "4",
      location: "TX",
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

  handleFilterNeed = (needLocation) => {
    this.setState({
      needs: this.state.needs.filter(
        (need) => need.need_location == needLocation
      ),
    });
    console.log("filtered");
  };

  handleFilterInventory = (inventoryLocation) => {
    this.setState({
      inventories: this.state.inventories.filter(
        (inventory) => inventory.inventory_location == inventoryLocation
      ),
    });
  };
  handleDeleteNeed = (needId) => {
    console.log("delete");
    this.setState({
      needs: this.state.needs.filter((need) => need.id !== needId),
    });

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
    this.setState({
      inventories: this.state.inventories.filter(
        (inventory) => inventory.id !== inventoryId
      ),
    });

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
      handleFilterInventory: this.handleFilterInventory,
      handleFilterNeed: this.handleFilterNeed,
    };
    return (
      <MyContext.Provider value={value}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
