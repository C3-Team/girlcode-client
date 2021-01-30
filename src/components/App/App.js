import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import { Route } from "react-router-dom";
import NeedPage from "../Need/NeedPage";
import InventoryPage from "../Inventory/InventoryPage";
import NeedList from "../Need/NeedList";
import InventoryList from "../Inventory/InventoryList";
import Header from "../Header/Header";

import Login from "../Registration/Login";
import Signup from "../Registration/Signup";

import { MyContext } from "../Context/Context";

class App extends Component {
  static contextType = MyContext;

  mainRoutes = () => {
    return (
      <>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route path="/needpage" component={NeedPage} />
        <Route path="/havepage" component={InventoryPage} />
        <Route path="/needform" component={NeedList} />
        <Route path="/haveform" component={InventoryList} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </>
    );
  };
  render() {
    return <>{this.mainRoutes()}</>;
  }
}

export default App;
