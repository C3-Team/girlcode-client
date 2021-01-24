import React, { Component } from "react";

const NeedListContext = React.createContext({
  needList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setNeedList: () => {},
});

export default NeedListContext;

export class NeedListProvider extends Component {
  state = {
    needList: [],
    error: null,
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

  setNeedList = (needList) => {
    this.setState({
      needList,
    });
  };
  render() {
    const value = {
      needList: this.state.needList,
      error: this.state.error,
      setError: this.state.setError,
      clearError: this.state.clearError,
      setNeedList: this.state.setNeedList,
    };
    return (
      <NeedListContext.provider value={value}>
        {this.props.children}
      </NeedListContext.provider>
    );
  }
}
