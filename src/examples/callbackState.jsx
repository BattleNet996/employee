import { Component } from "react";

export default class TodoList extends Component {
  state = {
    items: ["a", "b", "c"],
  };

  removeItem = (index) => {
    // const { items } = this.state;

    // items.splice(index, 1);

    // this.setState({
    //   items,
    // });

    this.setState((state) => {
      const { items } = state;

      items.splice(index, 1);

      return {
        // items: items.filter((_, i) => i !== index),
        items,
      };
    });
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextState.items);
    return nextState;
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.map((item, index) => (
          <div key={index} onClick={() => this.removeItem(index)}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}