import React from "react";

const CounterHOC = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data,
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <Component
          eventCount={this.state.count}
          handleEventClick={this.handleClick}
        />
      );
    }
  };
};

export default CounterHOC;
