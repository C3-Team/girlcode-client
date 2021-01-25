import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import { Route } from "react-router-dom";
import NeedPage from "../Need/NeedPage";
import HavePage from "../Have/HavePage";
import NeedList from "../Need/NeedList";
import HaveList from "../Have/HaveList";
import Header from "../Header/Header";
import "./App.css";
import Contact from "../Contact/Contact";
import Login from "../Registration/Login";
import Signup from "../Registration/Signup";

class App extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route path="/needpage" component={NeedPage} />
        <Route path="/havepage" component={HavePage} />
        <Route path="/needform" component={NeedList} />
        <Route path="/haveform" component={HaveList} />
        <Route path="/contactform" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </>
    );
  }
}

export default App;
