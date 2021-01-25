import React, { Component } from "react";

export const NullNeed = {
  name: "",
  email: "",
  tampon: "",
  pad: "",
  zipcode: "",
};

const NeedContext = React.createContext({
  need: NullNeed,
  error: null,
  setError: () => {},
  clearError: () => {},
  setNeed: () => {},
  clearNeed: () => {},
});

export default NeedContext;

export class NeedProvider extends Component {
  state = {
    need: NullNeed,
    error: null,
    isLoaded: false,
  };

  setError = (error) => {
    this.setState({
      error,
    });
  };

  clearError = () => {
    this.setState({
      error: null,
    });
  };

  setNeed = (need) => {
    this.setState({
      need,
    });
  };

  clearNeed = () => {
    this.setState({
      NullNeed,
    });
  };
  render() {
    const value = {
      need: this.state.need,
      error: this.state.error,
      setError: this.state.setError,
      clearError: this.state.clearError,
      setNeed: this.state.setNeed,
      clearNeed: this.state.clearNeed,
    };
    return (
      <NeedContext.Provider value={value}>
        {this.props.children}
      </NeedContext.Provider>
    );
  }
}
