import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  /**
   * props include data that we give to a component,
   * state includes data that is private/local to a component.
   * props is read-only.
   */

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
